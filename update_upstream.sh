#!/usr/bin/env bash
# update_upstream.sh
# Синхронизирует ветку sync-upstream с Roo-Code (git subtree), приоритет за локальными изменениями.

set -euo pipefail

UPSTREAM_URL="https://github.com/RooCodeInc/Roo-Code.git"
UPSTREAM_REMOTE="upstream"
UPSTREAM_BRANCH="main"
TARGET_BRANCH="sync-upstream"
SUBTREE_PREFIX="ai_ide_bas_main"

current_branch=$(git rev-parse --abbrev-ref HEAD)
if [[ "$current_branch" != "$TARGET_BRANCH" ]]; then
  echo "❌ Вы на ветке '$current_branch'. Переключитесь на '$TARGET_BRANCH' и повторите."
  exit 1
fi

if ! git remote | grep -q "^${UPSTREAM_REMOTE}$"; then
  echo "Добавляю remote '${UPSTREAM_REMOTE}' → ${UPSTREAM_URL}"
  git remote add "$UPSTREAM_REMOTE" "$UPSTREAM_URL"
fi

echo "⏬ Fetching ${UPSTREAM_REMOTE}/${UPSTREAM_BRANCH}..."
git fetch "$UPSTREAM_REMOTE" "$UPSTREAM_BRANCH"

NEED_STASH=0
if ! git diff --quiet || ! git diff --staged --quiet; then
  git stash push -u -m "pre-upstream-$(date +%F_%T)"
  NEED_STASH=1
fi

# Включаем rerere для запоминания конфликтов
git config rerere.enabled true

# Основной путь: git subtree pull
set +e

echo "🌳 Выполняю: git subtree pull --prefix ${SUBTREE_PREFIX} ${UPSTREAM_REMOTE} ${UPSTREAM_BRANCH} --squash"
OUTPUT=$(git subtree pull --prefix "$SUBTREE_PREFIX" "$UPSTREAM_REMOTE" "$UPSTREAM_BRANCH" --squash 2>&1)
STATUS=$?
set -e

if [[ $STATUS -ne 0 ]]; then
  echo "⚠️  subtree pull завершился с ошибкой:\n$OUTPUT"
  echo "Пробую запасной путь: merge с приоритетом ours (локальные изменения)"
  # Резервный путь: обычный merge (не идеален для subtree, но иногда полезен)
  git merge "$UPSTREAM_REMOTE/$UPSTREAM_BRANCH" -X ours --no-edit || true
fi

if [[ $NEED_STASH -eq 1 ]]; then
  git stash pop || true
fi

echo "✅ Ветка '${TARGET_BRANCH}' синхронизирована с ${UPSTREAM_REMOTE}/${UPSTREAM_BRANCH} (subtree: ${SUBTREE_PREFIX})"
