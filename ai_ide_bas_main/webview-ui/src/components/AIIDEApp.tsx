import React from "react"
import WelcomeScreen from "./WelcomeScreen"
import StartScreen from "./StartScreen"
import HistoryScreen, { HistoryItem } from "./HistoryScreen"
import UserScreen from "./UserScreen"
import TokensError from "./TokensError"

type Screen = "welcome" | "start" | "history" | "user" | "tokensError"

export const AIIDEApp: React.FC = () => {
  const [screen, setScreen] = React.useState<Screen>("welcome")

  const history: HistoryItem[] = [
    { id: "1", title: "Сгенерировать user story для входа" },
    { id: "2", title: "Подготовить архитектуру сервиса" },
  ]

  const onGoogleSignIn = () => {
    setScreen("user")
  }

  return (
    <div className="h-full w-full">
      <div className="fixed top-3 right-3 z-[1] flex gap-2">
        <select className="bg-vscode-input-background border border-vscode-input-border rounded px-2 py-1" value={screen} onChange={(e) => setScreen(e.target.value as Screen)}>
          <option value="welcome">Welcome</option>
          <option value="start">Start</option>
          <option value="history">History</option>
          <option value="user">User</option>
          <option value="tokensError">Tokens Error</option>
        </select>
      </div>

      {screen === "welcome" && <WelcomeScreen onGoogleSignIn={onGoogleSignIn} />}
      {screen === "start" && <StartScreen onGoogleSignIn={onGoogleSignIn} />}
      {screen === "history" && <HistoryScreen onGoogleSignIn={onGoogleSignIn} history={history} />}
      {screen === "user" && (
        <UserScreen userName="AI IDE BAS" userEmail="noreply@aiidebas.com" bonusTokens={20000} invitedCount={4} />
      )}
      {screen === "tokensError" && <TokensError requiredTokens={500} userTokens={120} />}
    </div>
  )
}

export default AIIDEApp


