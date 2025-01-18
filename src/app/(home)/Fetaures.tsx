'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { DollarSign, Truck} from 'lucide-react'

export function Features() {
  const features = [
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
            {index % 2 === 0 && (
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

            {index % 2 === 1 && (
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
