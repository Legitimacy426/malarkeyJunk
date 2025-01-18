'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Camera, MapPin, CreditCard } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


type Message = {
  text: string
  isUser: boolean
  type?: 'text' | 'photo' | 'location' | 'schedule' | 'payment'
  options?: string[]
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Welcome to Malarkey! Let's get your junk removal sorted. Could you share a photo of what needs to be removed?", isUser: false }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [step, setStep] = useState<'photo' | 'location' | 'schedule' | 'payment'>('photo')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handlePhotoUpload = () => {
    setMessages(prev => [...prev,
      { text: "📸 Photo uploaded", isUser: true, type: 'photo' },
      { text: "Great! Based on the photo, we estimate this to be a medium-sized job. Where should we pick this up from?", isUser: false, type: 'location' }
    ])
    setStep('location')
  }

  const handleLocationSelect = () => {
    setMessages(prev => [...prev,
      { text: "📍 123 Main St, Anytown, USA", isUser: true, type: 'location' },
      { text: "Perfect! When would you like us to come by? We offer same-day service for an additional fee.", isUser: false, type: 'schedule',
        options: ["Today (+$50)", "Tomorrow", "This Weekend"] }
    ])
    setStep('schedule')
  }

  const handleScheduleSelect = (time: string) => {
    const price = time.includes("Today") ? "$149.99" : "$99.99"
    setMessages(prev => [...prev,
      { text: `Selected time: ${time}`, isUser: true, type: 'schedule' },
      { text: `Great choice! The total for your junk removal service will be ${price}. Would you like to proceed with payment?`, isUser: false, type: 'payment' }
    ])
    setStep('payment')
  }

  const handlePayment = () => {
    setMessages(prev => [...prev,
      { text: "💳 Payment completed", isUser: true, type: 'payment' },
      { text: "Thank you for your payment! We'll see you at the scheduled time. Feel free to message us if you need anything else!", isUser: false }
    ])
    setStep('photo')
  }

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      setInput('')
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
      }, 1000)
    }
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-xl w-full max-w-2xl h-[600px] flex flex-col"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-2xl font-bold text-[#2F4F2F]">Malarkey Chat</h2>
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
                    : 'bg-[#E8E0D5] text-[#4A3220]'
                }`}
              >
                {message.text}
                {message.options && !message.isUser && (
                  <div className="mt-3 space-y-2">
                    {message.options.map((option, i) => (
                      <Button
                        key={i}
                        onClick={() => handleScheduleSelect(option)}
                        className="w-full bg-[#2F4F2F] hover:bg-[#3A6A3A] text-white"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}
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
        <div className="flex flex-col space-y-2">
          {step === 'photo' && (
            <Button
              onClick={handlePhotoUpload}
              className="bg-[#2F4F2F] hover:bg-[#3A6A3A] text-white"
            >
              <Camera className="h-4 w-4 mr-2" />
              Upload Photo
            </Button>
          )}
          {step === 'location' && (
            <Button
              onClick={handleLocationSelect}
              className="bg-[#2F4F2F] hover:bg-[#3A6A3A] text-white"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Set Location
            </Button>
          )}
          {step === 'payment' && (
            <Button
              onClick={handlePayment}
              className="bg-[#2F4F2F] hover:bg-[#3A6A3A] text-white"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Complete Payment
            </Button>
          )}
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
              className="bg-[#2F4F2F] hover:bg-[#3A6A3A] transition-all duration-200"
            >
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
