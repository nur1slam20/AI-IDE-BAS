import React from "react"
import InviteModal from "./InviteModal"

export interface UserScreenProps {
  userName?: string
  userEmail?: string
  avatarUrl?: string
  bonusTokens?: number
  invitedCount?: number
  onInvite?: () => void
  onCollaborate?: () => void
  onLogout?: () => void
  onGoogleSignIn?: () => void
}

export const UserScreen: React.FC<UserScreenProps> = ({
  userName = "Имя аккаунта",
  userEmail = "user@example.com",
  avatarUrl,
  bonusTokens = 0,
  invitedCount = 0,
  onInvite,
  onCollaborate,
  onLogout,
}) => {
  const [showInvite, setShowInvite] = React.useState(false)

  return (
    <div className="h-full w-full overflow-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
              <span className="font-bold text-lg">AI</span>
            </div>
            <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">AI IDE BAS</div>
          </div>
          <button 
            onClick={onLogout} 
            className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-slate-700 border border-gray-200 shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            Выйти
          </button>
        </div>

        {/* User Profile Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden shadow-lg">
              {avatarUrl ? (
                <img src={avatarUrl} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                  {userName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">{userName}</h2>
              <p className="text-slate-600 dark:text-slate-400">{userEmail}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">💰</span>
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Бонусные токены</span>
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{bonusTokens.toLocaleString()}</div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">👥</span>
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Приглашено друзей</span>
              </div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">{invitedCount}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setShowInvite(true)
                onInvite?.()
              }}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <span className="text-lg">🎁</span>
              <span className="font-medium">Пригласить друга</span>
            </button>
            <button
              onClick={onCollaborate}
              className="flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 text-slate-700 border border-gray-200 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <span className="text-lg">🤝</span>
              <span className="font-medium">Совместная работа</span>
            </button>
          </div>
        </div>

        {/* Future Features Placeholder */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Планируемые функции</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border-2 border-dashed border-gray-200 dark:border-slate-600 rounded-xl">
              <div className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Аналитика</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Статистика использования</p>
            </div>
            <div className="text-center p-6 border-2 border-dashed border-gray-200 dark:border-slate-600 rounded-xl">
              <div className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚙️</span>
              </div>
              <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Настройки</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Персонализация</p>
            </div>
            <div className="text-center p-6 border-2 border-dashed border-gray-200 dark:border-slate-600 rounded-xl">
              <div className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Инструменты</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Дополнительные функции</p>
            </div>
          </div>
        </div>
      </div>

      <InviteModal isOpen={showInvite} onClose={() => setShowInvite(false)} />
    </div>
  )
}

export default UserScreen


