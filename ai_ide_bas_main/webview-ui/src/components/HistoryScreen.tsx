import React from "react"

import { StartScreen, StartScreenProps } from "./StartScreen"

export interface HistoryItem {
  id: string
  title: string
  createdAt?: string
}

export interface HistoryScreenProps extends StartScreenProps {
  history?: HistoryItem[]
}

export const HistoryScreen: React.FC<HistoryScreenProps> = ({ onGoogleSignIn, socialLinks, imageUrl, history }) => {
  const hasHistory = (history?.length ?? 0) > 0

  return (
    <div className="h-full w-full">
      <StartScreen onGoogleSignIn={onGoogleSignIn} socialLinks={socialLinks} imageUrl={imageUrl} />

      {hasHistory && (
        <div className="max-w-6xl mx-auto px-8 pb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">История запросов</h2>
            </div>
            
            <div className="space-y-3">
              {history!.map((h, index) => (
                <div key={h.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">{index + 1}</span>
                    </div>
                    <div className="truncate text-slate-700 dark:text-slate-300 font-medium">{h.title}</div>
                  </div>
                  {h.createdAt && (
                    <div className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {h.createdAt}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HistoryScreen


