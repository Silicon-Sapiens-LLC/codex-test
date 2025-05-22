import { ReactNode } from 'react'
import Button from './Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded min-w-[300px]">
        {children}
        <div className="text-right mt-4">
          <Button type="button" className="bg-gray-500" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
