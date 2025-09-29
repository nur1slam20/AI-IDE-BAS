import React from "react"
import { useAIIDEState } from "../context/AIIDEStateContext"
import WelcomeScreen from "./WelcomeScreen"
import StartScreen from "./StartScreen"
import HistoryScreen from "./HistoryScreen"
import UserScreen from "./UserScreen"
import TokensError from "./TokensError"
import AIIDEToggle from "./AIIDEToggle"

const AIIDEView: React.FC = () => {
  const {
    currentScreen,
    isAuthenticated,
    userInfo,
    history,
    tokensError,
    signInWithGoogle,
    signOut,
    inviteFriend,
    copyInviteLink,
    openSettings,
  } = useAIIDEState()

  // Определяем какой экран показывать на основе состояния
  const getScreenToShow = (): React.ReactNode => {
    // Если есть ошибка токенов, показываем её
    if (tokensError) {
      return (
        <TokensError
          requiredTokens={tokensError.requiredTokens}
          userTokens={tokensError.userTokens}
          onInviteFriends={inviteFriend}
          onOpenSettings={openSettings}
        />
      )
    }

    // Если пользователь авторизован, показываем UserScreen
    if (isAuthenticated && userInfo) {
      return (
        <UserScreen
          userName={userInfo.name}
          userEmail={userInfo.email}
          avatarUrl={userInfo.avatarUrl}
          bonusTokens={userInfo.bonusTokens}
          invitedCount={userInfo.invitedCount}
          onInvite={inviteFriend}
          onCollaborate={() => {}}
          onLogout={signOut}
        />
      )
    }

    // Если не авторизован, показываем экраны в зависимости от currentScreen
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onGoogleSignIn={signInWithGoogle} />
      
      case "start":
        return <StartScreen onGoogleSignIn={signInWithGoogle} />
      
      case "history":
        return <HistoryScreen onGoogleSignIn={signInWithGoogle} history={history} />
      
      default:
        return <WelcomeScreen onGoogleSignIn={signInWithGoogle} />
    }
  }

  return (
    <div className="h-full w-full">
      <AIIDEToggle />
      {getScreenToShow()}
    </div>
  )
}

export default AIIDEView
