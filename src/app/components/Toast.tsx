// // import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { X } from 'lucide-react'

// interface ToastProps {
//   message: string
//   buttonText?: string
//   onButtonClick?: () => void
//   duration?: number
//   position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
//   onClose?: () => void
// }

// export const Toast: React.FC<ToastProps> = ({
//   message,
//   buttonText,
//   onButtonClick,
//   duration = 5000,
//   position = 'bottom-right',
//   onClose
// }) => {
//   const [isVisible, setIsVisible] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false)

//     }, duration)

//     return () => clearTimeout(timer)
//   }, [duration, onClose])

//   const positionStyles = {
//     'top-left': 'top-4 left-4',
//     'top-right': 'top-4 right-4',
//     'bottom-left': 'bottom-4 left-4',
//     'bottom-right': 'bottom-4 right-4'
//   }

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 50 }}
//           className={`fixed ${positionStyles[position]} z-50 max-w-md w-full bg-gray-800 text-white rounded-lg shadow-lg`}
//         >
//           <div className="flex items-start p-4">
//             <div className="flex-grow">
//               <p className="text-sm font-medium">{message}</p>
//               {buttonText && onButtonClick && (
//                 <button
//                   onClick={onButtonClick}
//                   className="mt-2 px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   {buttonText}
//                 </button>
//               )}
//             </div>
//             <button
//               onClick={() => {
//                 setIsVisible(false)
//                 onClose && onClose()
//               }}
//               className="ml-4 text-gray-400 hover:text-white focus:outline-none"
//             >
//               <X size={16} />
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

// interface ToastContextType {
//   showToast: (props: Omit<ToastProps, 'onClose'>) => void
// }

// const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

// export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [toasts, setToasts] = useState<(ToastProps & { id: number })[]>([])

//   const showToast = (props: Omit<ToastProps, 'onClose'>) => {
//     const id = Date.now()
//     setToasts(prevToasts => [...prevToasts, { ...props, id }])
//   }

//   const removeToast = (id: number) => {
//     setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id))
//   }

//   return (
//     <ToastContext.Provider value={{ showToast }}>
//       {children}
//       {toasts.map(toast => (
//         <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
//       ))}
//     </ToastContext.Provider>
//   )
// }

// export const useToast = () => {
//   const context = React.useContext(ToastContext)
//   if (context === undefined) {
//     throw new Error('useToast must be used within a ToastProvider')
//   }
//   return context
// }