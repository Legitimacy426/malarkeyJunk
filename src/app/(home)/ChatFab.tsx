'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Chat from './Chat'

const TrashIcon = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M15 20H45V50C45 52.7614 42.7614 55 40 55H20C17.2386 55 15 52.7614 15 50V20Z"
      fill="#2F4F2F"
      initial={{ y: 0 }}
      animate={{ y: [0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M10 15C10 12.2386 12.2386 10 15 10H45C47.7614 10 50 12.2386 50 15V20H10V15Z"
      fill="#8B4513"
      initial={{ rotate: 0 }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    />
    <motion.circle
      cx="20"
      cy="10"
      r="2"
      fill="#CD853F"
      initial={{ y: 0 }}
      animate={{ y: [-3, 0, -3] }}
      transition={{ repeat: Infinity, duration: 1.5, delay: 0.5, ease: "easeInOut" }}
    />
    <motion.circle
      cx="40"
      cy="12"
      r="2"
      fill="#CD853F"
      initial={{ y: 0 }}
      animate={{ y: [-3, 0, -3] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M25 30L35 40M35 30L25 40"
      stroke="#3A6A3A"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0.6 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
)

export default function ChatFab() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 z-50 cursor-pointer bg-primary hover:bg-primary/90 rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <TrashIcon />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <Chat onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
