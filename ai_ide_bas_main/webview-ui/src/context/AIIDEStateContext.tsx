import React, { createContext, useContext, useState, useCallback, ReactNode } from "react"

export interface UserInfo {
  id: string
  name: string
  email: string
  avatarUrl?: string
  bonusTokens: number
  invitedCount: number
}

export interface HistoryItem {
  id: string
  title: string
  createdAt?: string
}

export type AIIDEScreen = "welcome" | "start" | "history" | "user" | "tokensError"

interface AIIDEStateContextType {
  // Screen state
  currentScreen: AIIDEScreen
  setCurrentScreen: (screen: AIIDEScreen) => void
  
  // Auth state
  isAuthenticated: boolean
  userInfo: UserInfo | null
  setUserInfo: (user: UserInfo | null) => void
  
  // History state
  history: HistoryItem[]
  setHistory: (history: HistoryItem[]) => void
  
  // Actions
  signInWithGoogle: () => void
  signOut: () => void
  inviteFriend: () => void
  copyInviteLink: (link: string | undefined) => void
  openSettings: () => void
  
  // Error state
  tokensError: {
    requiredTokens: number
    userTokens: number
  } | null
  setTokensError: (error: { requiredTokens: number; userTokens: number } | null) => void
}

const AIIDEStateContext = createContext<AIIDEStateContextType | undefined>(undefined)

export const useAIIDEState = () => {
  const context = useContext(AIIDEStateContext)
  if (!context) {
    throw new Error("useAIIDEState must be used within AIIDEStateProvider")
  }
  return context
}

interface AIIDEStateProviderProps {
  children: ReactNode
}

export const AIIDEStateProvider: React.FC<AIIDEStateProviderProps> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<AIIDEScreen>("welcome")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: "1", title: "Сгенерировать user story для входа", createdAt: "2 часа назад" },
    { id: "2", title: "Подготовить архитектуру сервиса", createdAt: "1 день назад" },
  ])
  const [tokensError, setTokensError] = useState<{ requiredTokens: number; userTokens: number } | null>(null)

  const signInWithGoogle = useCallback(() => {
    const mockUser: UserInfo = {
      id: "1",
      name: "AI IDE BAS",
      email: "noreply@aiidebas.com",
      bonusTokens: 20000,
      invitedCount: 4,
    }
    
    setUserInfo(mockUser)
    setIsAuthenticated(true)
    setCurrentScreen("user")
  }, [])

  const signOut = useCallback(() => {
    setUserInfo(null)
    setIsAuthenticated(false)
    setCurrentScreen("welcome")
  }, [])

  const inviteFriend = useCallback(() => {
    // Логика приглашения
  }, [])

  const copyInviteLink = useCallback((link: string | undefined) => {
    if (link) {
      navigator.clipboard.writeText(link)
    }
  }, [])

  const openSettings = useCallback(() => {
    // Логика открытия настроек
  }, [])

  const value: AIIDEStateContextType = {
    currentScreen,
    setCurrentScreen,
    isAuthenticated,
    userInfo,
    setUserInfo,
    history,
    setHistory,
    signInWithGoogle,
    signOut,
    inviteFriend,
    copyInviteLink,
    openSettings,
    tokensError,
    setTokensError,
  }

  return (
    <AIIDEStateContext.Provider value={value}>
      {children}
    </AIIDEStateContext.Provider>
  )
}
