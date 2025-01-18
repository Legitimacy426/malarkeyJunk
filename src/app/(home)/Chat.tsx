'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Chat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Welcome to Malarkey! Ready to trash talk?", isUser: false }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      setInput('')
      setIsTyping(true)
      // Simulate AI response
      setTimeout(() => {
        const response = getAIResponse()
        setMessages(prev => [...prev, { text: response, isUser: false }])
        setIsTyping(false)
      }, 1000)
    }
  }

  const getAIResponse = () => {
    const responses = [
      "That's rubbish! Let's get it cleaned up right away. Would you like a quote?",
      "Sounds like a trashy situation. We've got you covered! When would you like us to come by?",
      "Don't waste any more time, we'll handle it! Our team is available 24/7.",
      "Garbage in, garbage out... but with us, it's just out! Shall we schedule a pickup?",
      "We're not talking trash, we're removing it! Can you tell us more about what needs to go?"
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-xl w-full max-w-2xl h-[80vh] flex flex-col"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-2xl font-bold text-[#2F4F2F]">Malarkey Chat</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="hover:bg-[#D4C5B5] hover:text-[#4A3220] transition-colors"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F5F5]">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-[#2F4F2F] text-white'
                    : 'bg-[#E8E0D5] text-[#4A3220] hover:bg-[#D4C5B5] transition-colors'
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-[#E8E0D5] p-3 rounded-lg">
                <span className="inline-flex gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                  <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t bg-[#E8E0D5]">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="focus:ring-2 focus:ring-[#2F4F2F]/50 bg-white"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-[#2F4F2F] hover:bg-[#3A6A3A] transition-all duration-200 hover:scale-105"
          >
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
