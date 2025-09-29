import React from "react"
import { Modal } from "./common/Modal"

export interface InviteModalProps {
  isOpen: boolean
  onClose: () => void
  inviteLink?: string
  onCopy?: (link: string | undefined) => void
}

export const InviteModal: React.FC<InviteModalProps> = ({ isOpen, onClose, inviteLink, onCopy }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[600px] h-auto w-[600px]">
      <div className="p-8 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Пригласить друга</h3>
          <button 
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-400 transition-colors" 
            onClick={onClose}
          >
            <span className="text-lg">×</span>
          </button>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🎁</span>
            </div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Бонусы за приглашение</h4>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Делитесь удобным инструментом — это приятно! AI IDE BAS дарит welcome-бонус в виде токенов DeepSeek вам и вашему другу. 
            Для получения бонуса достаточно поделиться ссылкой. После авторизации друга через Google бонусы начислятся автоматически.
          </p>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Ссылка для приглашения</label>
          <div className="flex items-stretch gap-3">
            <input
              value={inviteLink ?? "https://aiidebas.com/invite/placeholder"}
              readOnly
              className="flex-1 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl px-4 py-3 text-slate-700 dark:text-slate-300"
            />
            <button
              onClick={() => onCopy?.(inviteLink)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              <span className="text-lg">📋</span>
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button 
            onClick={onClose} 
            className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-slate-700 border border-gray-200 shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            Закрыть
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default InviteModal


