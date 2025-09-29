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
    <div className="h-full w-full overflow-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
              <span className="font-bold text-lg">AI</span>
            </div>
            <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">AI IDE BAS</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4 leading-tight">
                Добро пожаловать в Roo Code
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Генерируйте документацию, пишите требования и проектные артефакты быстрее с помощью искусственного интеллекта.
                Подготовьте собственный API-ключ или войдите через Google, чтобы использовать доступные бонусные токены.
              </p>
            </div>

            {/* Google Sign In Button */}
            <div>
              <button
                onClick={onGoogleSignIn}
                className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-slate-700 px-8 py-4 rounded-xl shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-medium text-lg">Войти через Google</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 flex-wrap">
              {socialLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {imageUrl ? (
                <img src={imageUrl} alt="Welcome" className="w-full h-auto rounded-2xl shadow-2xl" />
              ) : (
                <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">AI IDE BAS</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">Иллюстрация</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen


