'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Camera, Clock, DollarSign, Truck, MessageSquare, CreditCard } from 'lucide-react'
import Image from 'next/image'
export function Features() {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-[#2F4F2F]" />,
      title: "Snap & Scrap",
      description: "Picture this: you snap, we <span class='trash-text underlined-pun'>zap</span>! Our photo-based quotes are rubbish-free.",
      bgColor: "bg-[#F5F5F5]"
    },
    {
      icon: <Clock className="h-8 w-8 text-[#8B4513]" />,
      title: "Waste No Time",
      description: "Same-day service that's anything but <span class='trash-text underlined-pun'>garbage</span>. We're fast, not trashy!",
      bgColor: "bg-[#CD853F]"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#2F4F2F]" />,
      title: "Junk the Hidden Fees",
      description: "Our pricing is as transparent as a clean window. No <span class='trash-text underlined-pun'>rubbish</span> charges here!",
      bgColor: "bg-[#2F4F2F]"
    },
    {
      icon: <Truck className="h-8 w-8 text-[#CD853F]" />,
      title: "We've Got the Junk Gene",
      description: "Our expert team will handle your <span class='trash-text underlined-pun'>trash</span> with care. We're born to bin!",
      bgColor: "bg-[#8B4513]"
    }
  ]

  return (
    <div className="w-full">
      {features.map((feature, index) => (
        <section
          key={index}
          className={`min-h-screen flex items-center justify-center ${feature.bgColor}`}
        >
          <div className="container px-4 md:px-6 max-w-7xl mx-auto py-12 md:py-24">
            {index % 4 === 0 && (
              // Layout 1: Side by side with image on right
              <motion.div
                className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-white rounded-full p-4 mb-6 shadow-lg">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-[#2F4F2F]">{feature.title}</h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-[#4A3220] mb-6 md:mb-8" dangerouslySetInnerHTML={{ __html: feature.description }} />
                  <Button size="lg" className="bg-[#2F4F2F] hover:bg-[#3A6A3A] text-white w-full md:w-auto">Learn More</Button>
                </div>
                <div className="flex-1 w-full md:w-auto mb-8 md:mb-0">
                  <motion.div
                    className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-lg shadow-2xl relative overflow-hidden"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                  >
                    {/* Film Strip Top */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-8 md:h-12 flex"
                      initial={{ x: -100 }}
                      whileInView={{ x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-8 md:w-12 h-8 md:h-12 border-2 border-[#4A3220] flex-shrink-0 bg-[#2F4F2F]/20" />
                      ))}
                    </motion.div>

                    {/* Camera Body */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 md:w-56 h-28 md:h-40 bg-gradient-to-br from-[#2F4F2F] to-[#1a1a1a] rounded-lg shadow-2xl"
                      initial={{ scale: 0, rotateY: -180 }}
                      whileInView={{ scale: 1, rotateY: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />

                    {/* Camera Lens */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 md:w-24 h-16 md:h-24 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 1.3 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 border-4 border-[#CD853F] rounded-full"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: [1, 1.2, 1], opacity: [0.8, 0.4, 0] }}
                          transition={{ delay: 1.3 + i * 0.2, duration: 1.5, repeat: Infinity }}
                        />
                      ))}
                      <div className="absolute inset-2 bg-[#1a1a1a] rounded-full border-4 border-[#8B4513]" />
                    </motion.div>

                    {/* Flash Effect */}
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: [0, 0.8, 0] }}
                      transition={{ delay: 2, duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
                    />

                    {/* Film Strip Bottom */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-8 md:h-12 flex"
                      initial={{ x: 100 }}
                      whileInView={{ x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-8 md:w-12 h-8 md:h-12 border-2 border-[#4A3220] flex-shrink-0 bg-[#2F4F2F]/20" />
                      ))}
                    </motion.div>

                    {/* Floating Photos */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-16 md:w-24 h-14 md:h-20 bg-white/90 rounded-sm shadow-xl"
                        initial={{
                          x: -100,
                          y: 100,
                          rotate: -30,
                          opacity: 0
                        }}
                        whileInView={{
                          x: [null, 50 + i * 30],
                          y: [null, -20 - i * 20],
                          rotate: [-30, -5],
                          opacity: [0, 1]
                        }}
                        transition={{ delay: 2.5 + i * 0.2, duration: 1 }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}

            {index % 4 === 1 && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-[250px] sm:h-[300px] rounded-lg shadow-2xl relative overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src="/pic2.jpg"
                    alt="Feature illustration"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="text-center md:text-right">
                  <div className="inline-block bg-white/90 backdrop-blur rounded-full p-4 mb-4 md:mb-6 shadow-lg">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">{feature.title}</h2>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8" dangerouslySetInnerHTML={{ __html: feature.description }} />
                  <Button size="lg" className="bg-[#2F4F2F] hover:bg-[#3A6A3A] text-white w-full md:w-auto">Learn More</Button>
                </div>

                <div className="w-full h-[250px] sm:h-[300px] rounded-lg shadow-2xl relative overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src="/pic1.jpg"
                    alt="Additional feature illustration"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            )}

            {/* ... Rest of the code remains unchanged ... */}
            {index % 4 === 2 && (
              // Layout 3: Side by side with image on left
              <motion.div
                className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex-1 text-center md:text-right">
                  <div className="inline-block bg-[#CD853F] rounded-full p-4 mb-4 md:mb-6 shadow-lg">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">{feature.title}</h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8" dangerouslySetInnerHTML={{ __html: feature.description }} />
                  <Button size="lg" className="bg-[#CD853F] hover:bg-[#8B4513] text-white w-full md:w-auto">Learn More</Button>
                </div>
                <div className="flex-1 w-full md:w-auto">
                  <motion.div
                    className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-[#8B4513] to-[#2F4F2F] rounded-lg shadow-2xl relative overflow-hidden"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                  >
                    {/* Hexagonal Money Pattern */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative w-60 md:w-80 h-60 md:h-80">
                          {/* Center Dollar Symbol */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-bold text-[#CD853F]">
                            $
                          </div>

                          {/* Hexagonal Pattern */}
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-24 md:w-32 h-24 md:h-32"
                              style={{
                                top: Math.sin((i * Math.PI * 2) / 6) * (window.innerWidth < 768 ? 90 : 120) + (window.innerWidth < 768 ? 90 : 120),
                                left: Math.cos((i * Math.PI * 2) / 6) * (window.innerWidth < 768 ? 90 : 120) + (window.innerWidth < 768 ? 90 : 120),
                              }}
                            >
                              <div className="w-full h-full bg-[#CD853F]/20 backdrop-blur-sm rounded-xl transform rotate-45 border border-[#CD853F]/30" />
                              <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl text-[#CD853F]">
                                {['$', '¢', '£', '€', '¥', '₿'][i]}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Lines */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CD853F] to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CD853F] to-transparent" />
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#CD853F] to-transparent" />
                      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#CD853F] to-transparent" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {index % 4 === 3 && (
              // Layout 4: Grid layout
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center md:text-left order-2 md:order-1">
                  <div className="inline-block bg-white rounded-full p-4 mb-4 md:mb-6 shadow-lg">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">{feature.title}</h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8" dangerouslySetInnerHTML={{ __html: feature.description }} />
                  <Button size="lg" className="bg-[#CD853F] hover:bg-[#8B4513] text-white w-full md:w-auto">Learn More</Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 md:order-2">
                  {/* Themed Cards */}
                  {[
                    {
                      bg: "bg-gradient-to-br from-[#8B4513] to-[#CD853F]",
                      icon: "🌳",
                      text: "Eco-Friendly"
                    },
                    {
                      bg: "bg-gradient-to-br from-[#2F4F2F] to-[#3A6A3A]",
                      icon: "♻️",
                      text: "Sustainable"
                    },
                    {
                      bg: "bg-gradient-to-br from-[#654321] to-[#8B4513]",
                      icon: "🌱",
                      text: "Green Future"
                    },
                    {
                      bg: "bg-gradient-to-br from-[#556B2F] to-[#2F4F2F]",
                      icon: "🌍",
                      text: "Earth First"
                    }
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      className={`h-[150px] sm:h-[200px] ${card.bg} rounded-lg shadow-xl relative overflow-hidden group`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl sm:text-5xl mb-2 sm:mb-4">{card.icon}</span>
                        <span className="text-lg sm:text-xl font-bold text-[#F5F5F5]">{card.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}

export function HowItWorks() {
  const steps = [
    {
      icon: <Camera className="h-8 w-8 text-[#2F4F2F]" />,
      title: "Upload Photos",
      description: "Take photos of your junk and upload them to our AI-powered system.",
      bgColor: "bg-[#F5F5F5]"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-[#8B4513]" />,
      title: "Get a Quote",
      description: "Receive an instant quote based on your photos and location.",
      bgColor: "bg-[#CD853F]"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#2F4F2F]" />,
      title: "Book & Pay",
      description: "Choose a convenient time and pay securely through our chat interface.",
      bgColor: "bg-[#2F4F2F]"
    },
    {
      icon: <Truck className="h-8 w-8 text-[#CD853F]" />,
      title: "We Remove It",
      description: "Our professional team arrives and takes care of the rest.",
      bgColor: "bg-[#8B4513]"
    }
  ]

  return (
    <div className="w-full py-24 bg-[#F5F5F5]">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Animated Background Shapes */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, ${step.bgColor.slice(3)} 10%, transparent 50%)`,
                  backgroundSize: '400% 400%',
                }}
              />
              <div className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-inner relative z-10`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#2F4F2F] relative z-10">Step {index + 1}</h3>
              <h4 className="text-xl font-semibold mb-4 text-[#8B4513] relative z-10">{step.title}</h4>
              <p className="text-[#4A3220] relative z-10">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
