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
  // Дефолтная история как в прототипе
  const defaultHistory: HistoryItem[] = [
    {
      id: "1",
      title: "Сгенерировать user story для входа",
      createdAt: "2 часа назад"
    },
    {
      id: "2", 
      title: "Подготовить архитектуру сервиса",
      createdAt: "1 день назад"
    },
    {
      id: "3",
      title: "сделай мне макеты/прототипы под us и uc", 
      createdAt: "1 день назад"
    }
  ]

  const historyToShow = history && history.length > 0 ? history : defaultHistory

  return (
    <div className="h-full w-full overflow-auto bg-vscode-editor-background text-vscode-foreground">
      <div className="p-4">
        <div className="space-y-2">
          {historyToShow.map((h, index) => (
            <div 
              key={h.id} 
              className="flex items-center gap-2 py-2 px-3 hover:bg-vscode-list-hoverBackground rounded text-sm cursor-pointer group"
            >
              <div className="w-5 h-5 bg-vscode-button-background rounded flex items-center justify-center flex-shrink-0 text-xs font-medium">
                {index + 1}
              </div>
              <div className="flex-1 truncate text-vscode-foreground group-hover:text-vscode-list-hoverForeground">
                {h.title}
              </div>
              {h.createdAt && (
                <div className="text-xs text-vscode-descriptionForeground whitespace-nowrap">
                  {h.createdAt}
                </div>
              )}
            </div>
          ))}
        </div>

        {historyToShow.length === 0 && (
          <div className="text-center py-8 text-vscode-descriptionForeground text-sm">
            История пуста
          </div>
        )}

        {/* View All History Link */}
        <div className="mt-4 pt-4 border-t border-vscode-widget-border">
          <button className="w-full text-left text-sm text-vscode-textLink hover:text-vscode-textLinkActive py-2">
            Просмотреть всю историю
          </button>
        </div>
      </div>
    </div>
  )
}

export default HistoryScreen


