import React from "react"

export interface TokensErrorProps {
  requiredTokens?: number
  userTokens?: number
  onInviteFriends?: () => void
  onOpenSettings?: () => void
}

export const TokensError: React.FC<TokensErrorProps> = ({
  requiredTokens = 0,
  userTokens = 0,
  onInviteFriends,
  onOpenSettings,
}) => {
  return (
    <div className="h-full w-full flex items-center justify-center px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-2xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">⚠️</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3">Недостаточно бонусных токенов</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Для выполнения запроса необходимо <span className="font-semibold text-red-600 dark:text-red-400">{requiredTokens}</span> токенов, 
            у вас <span className="font-semibold text-blue-600 dark:text-blue-400">{userTokens}</span>.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-8">
          <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Как получить больше токенов?</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">👥</span>
              </div>
              <span className="text-slate-700 dark:text-slate-300">Пригласите друзей и получите бонусные токены</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🔑</span>
              </div>
              <span className="text-slate-700 dark:text-slate-300">Добавьте личный API ключ в настройках расширения</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onInviteFriends}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <span className="text-lg">🎁</span>
            <span className="font-medium">Пригласить друзей</span>
          </button>
          <button 
            onClick={onOpenSettings} 
            className="flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 text-slate-700 border border-gray-200 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <span className="text-lg">⚙️</span>
            <span className="font-medium">Открыть настройки</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TokensError


