'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Chat from './Chat'

const FloatingTrash = ({ delay = 0, x = 0, y = 0, color = "#8B4513" }) => (
  <motion.div
    className="absolute"
    style={{ x, y }}
    animate={{
      y: [y, y - 40, y],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div className={`w-16 h-16 rounded-lg transform rotate-45`} style={{ backgroundColor: color, opacity: 0.6 }} />
  </motion.div>
)

const JunkYardSVG = () => (
  <svg
    viewBox="0 0 1000 600"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full opacity-15"
  >
    <defs>
      <pattern id="trash-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 20 L40 20 M20 0 L20 40" stroke="#2F4F2F" strokeWidth="1" opacity="0.2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="#F5F5F5" />
    <rect width="100%" height="100%" fill="url(#trash-pattern)" />
    <motion.path
      d="M0 500 Q 250 450 500 500 T 1000 500"
      stroke="#4A3220"
      strokeWidth="8"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M100 450 Q 300 300 500 450 T 900 450"
      stroke="#8B4513"
      strokeWidth="5"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
    />
  </svg>
)

export default function Hero() {
  const buttonControls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const button = document.querySelector('.shiny-button') as HTMLElement
      if (button) {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
        const maxDistance = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2))
        const shake = 1 - distance / maxDistance

        if (shake > 0) {
          buttonControls.start({
            x: Math.random() * 4 * shake - 2 * shake,
            y: Math.random() * 4 * shake - 2 * shake,
            transition: { duration: 0.1 }
          })
        } else {
          buttonControls.start({ x: 0, y: 0, transition: { duration: 0.1 } })
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [buttonControls])

  return (
    <section className="w-full min-h-screen pt-20 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#F5F5F5] via-[#E8E0D5] to-[#D4C5B5]">
      <JunkYardSVG />
      <FloatingTrash delay={0} x={100} y={200} color="#8B4513" />
      <FloatingTrash delay={1} x={-200} y={300} color="#2F4F2F" />
      <FloatingTrash delay={2} x={300} y={150} color="#CD853F" />

      <div className="container px-4 md:px-6 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-start space-y-8 text-center lg:text-left"
        >
          <motion.div
            initial={{ scale: 0.9, rotateX: 45 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="perspective-1000"
          >
            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-[#2F4F2F]">
              Junk Removal That&apos;s No{" "}
              <motion.span
                className="relative inline-block text-[#8B4513]"
                animate={{
                  rotateY: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                Garbage
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto max-w-[800px] text-lg md:text-xl lg:text-2xl text-[#4A3220] leading-relaxed"
          >
            We&apos;re not just{" "}
            <motion.span
              className="font-semibold text-[#CD853F]"
              whileHover={{ scale: 1.1 }}
            >
              talking trash
            </motion.span>,
            we&apos;re taking it out! Get an instant quote and book your junk removal service faster than you can say{" "}
            <motion.span
              className="font-semibold text-[#8B4513]"
              whileHover={{ scale: 1.1 }}
            >
              &quot;dumpster dive&quot;
            </motion.span>.
          </motion.p>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-2xl mx-auto lg:ml-auto lg:-mt-12"
          >
            <Chat />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
