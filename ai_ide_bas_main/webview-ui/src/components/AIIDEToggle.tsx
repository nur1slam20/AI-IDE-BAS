import React from "react"
import { useAIIDEState } from "../context/AIIDEStateContext"

const AIIDEToggle: React.FC = () => {
  const { currentScreen, setCurrentScreen, isAuthenticated, signOut } = useAIIDEState()

  const handleToggle = () => {
    if (isAuthenticated) {
      signOut()
    } else {
      setCurrentScreen("welcome")
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl text-sm font-medium"
      >
        {isAuthenticated ? "Выйти из AI IDE" : "AI IDE BAS"}
      </button>
      
      {!isAuthenticated && (
        <select
          value={currentScreen}
          onChange={(e) => setCurrentScreen(e.target.value as any)}
          className="px-3 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm"
        >
          <option value="welcome">Welcome</option>
          <option value="start">Start</option>
          <option value="history">History</option>
        </select>
      )}
    </div>
  )
}

export default AIIDEToggle
