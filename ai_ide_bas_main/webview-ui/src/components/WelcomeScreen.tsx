import React from "react"

type SocialLink = {
  label: string
  href: string
  icon?: React.ReactNode
}

export interface WelcomeScreenProps {
  onGoogleSignIn?: () => void
  socialLinks?: SocialLink[]
  imageUrl?: string
}

const defaultLinks: SocialLink[] = [
  { label: "aiidebas.com", href: "https://aiidebas.com" },
  { label: "Telegram", href: "https://t.me/AI_IDE_BAS" },
  { label: "YouTube", href: "https://www.youtube.com/@ai_ide_bas" },
  { label: "VK", href: "https://vk.com/ai_ide_bas?from=groups" },
  { label: "GitHub", href: "https://github.com/dradns/AI-IDE-BAS" },
  { label: "Instagram", href: "https://www.instagram.com/ai_ide_bas/" },
]

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGoogleSignIn, socialLinks = defaultLinks, imageUrl }) => {
  return (
    <div className="h-full w-full overflow-auto bg-vscode-editor-background text-vscode-foreground">
      {/* YouTube Banner */}
      <div className="bg-red-600 text-white px-3 py-2 text-xs flex items-center gap-2">
        <span>📺</span>
        <span>AI IDE BAS - ИИ Агент для аналитиков</span>
        <a href="https://www.youtube.com/@ai_ide_bas" target="_blank" rel="noreferrer" className="ml-auto text-white hover:underline">
          Смотреть →
        </a>
      </div>

      {/* Instruction Banner */}
      <div className="bg-blue-600 text-white px-3 py-2 text-xs flex items-center gap-2">
        <span>📋</span>
        <span>Инструкция по настройке</span>
        <a href="#" className="ml-auto text-white hover:underline">
          Открыть →
        </a>
      </div>

      <div className="p-4">
        {/* Welcome Message */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-vscode-foreground mb-2">
            Добро пожаловать в Roo Code!
          </h2>
          <p className="text-sm text-vscode-descriptionForeground mb-4">
            Создавайте, редактируйте и отслеживайте код с помощью ИИ. Подключите собственный API ключ или войдите через Google, чтобы получить доступ к бонусным токенам.
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-vscode-descriptionForeground mb-3">
            <span>🌐</span>
            <span>https://aiidebas.com/</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {socialLinks.slice(1, 6).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded bg-vscode-button-background hover:bg-vscode-button-hoverBackground flex items-center justify-center text-xs transition-colors"
                title={link.label}
              >
                {link.label === "Telegram" && "📱"}
                {link.label === "YouTube" && "📺"}
                {link.label === "VK" && "🔗"}
                {link.label === "GitHub" && "💻"}
                {link.label === "Instagram" && "📷"}
              </a>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-vscode-foreground mb-3">Преимущества авторизации</h3>
          <div className="space-y-2 text-xs text-vscode-descriptionForeground">
            <div className="flex items-start gap-2">
              <span className="text-green-400">🎁</span>
              <span>Welcome-бонус. Получите бесплатные DeepSeek токены сразу после регистрации.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400">⚡</span>
              <span>Генерируйте реальные артефакты сразу под ваши процессы разработки.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400">👥</span>
              <span>Приглашайте друзей. Увеличивайте свой бонусный баланс за каждого приглашенного и работайте над проектами вместе.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-400">🚀</span>
              <span>Авторизация через Google. Быстрый старт без паролей.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400">☁️</span>
              <span>Работайте из любого места. Создавайте проекты в облаке, делитесь результатами с коллегами.</span>
            </div>
          </div>
        </div>

        {/* Google Sign In Button */}
        <button
          onClick={onGoogleSignIn}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2"
        >
          <span>G</span>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  )
}

export default WelcomeScreen


