'use client'

import { motion } from 'framer-motion'
import { Camera, MessageSquare, CreditCard, Truck } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Camera className="h-12 w-12 text-[#2F4F2F]" />,
      title: "Snap Your Junk",
      description: "Take photos of your unwanted items and let our AI do the heavy lifting (mentally, that is). It's like Instagram, but for trash!",
      bgColor: "bg-[#F5F5F5]",
      accent: "text-[#2F4F2F]"
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-[#8B4513]" />,
      title: "Chat & Get Your Quote",
      description: "Our AI assistant crunches the numbers faster than a garbage compactor. No haggling, just honest pricing in seconds.",
      bgColor: "bg-[#CD853F]",
      accent: "text-[#8B4513]"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-[#2F4F2F]" />,
      title: "Lock It In",
      description: "Book your preferred time and pay securely. It's as smooth as a freshly emptied dumpster!",
      bgColor: "bg-[#2F4F2F]",
      accent: "text-[#CD853F]"
    },
    {
      icon: <Truck className="h-12 w-12 text-[#CD853F]" />,
      title: "Watch It Disappear",
      description: "Our team swoops in like junk-removal superheroes. Blink and you'll miss the transformation!",
      bgColor: "bg-[#8B4513]",
      accent: "text-white"
    }
  ]

  return (
    <div className="w-full">
      {steps.map((step, index) => (
        <section
          key={index}
          className={`min-h-screen flex items-center justify-center ${step.bgColor}`}
        >
          <div className="container px-4 md:px-6 max-w-7xl mx-auto py-12 md:py-24">
            <motion.div
              className="flex flex-col md:flex-row items-center gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block mb-6"
                >
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white/20 backdrop-blur-sm">
                    {step.icon}
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`text-4xl md:text-5xl font-bold mb-4 ${step.accent}`}
                >
                  Step {index + 1}: {step.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`text-xl md:text-2xl ${index === 0 ? 'text-gray-700' : 'text-white/90'}`}
                >
                  {step.description}
                </motion.p>
              </div>

              <motion.div
                className="flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                {index === 0 ? (
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
                ) : index === 1 ? (
                  <motion.div
                    className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-lg shadow-2xl relative overflow-hidden"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                  >
                    {/* Chat Bubbles Animation */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute ${i % 2 === 0 ? 'left-4' : 'right-4'} w-48 md:w-64 p-4 rounded-2xl ${i % 2 === 0 ? 'bg-[#CD853F]' : 'bg-[#8B4513]'}`}
                        initial={{
                          y: 400,
                          opacity: 0,
                          x: i % 2 === 0 ? -50 : 50
                        }}
                        whileInView={{
                          y: 100 + i * 80,
                          opacity: 1,
                          x: 0
                        }}
                        transition={{ delay: 0.3 * i, duration: 0.8 }}
                      >
                        <motion.div
                          className="h-2 w-24 bg-white/80 rounded-full mb-2"
                          animate={{
                            width: ['30%', '80%', '30%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: 'reverse'
                          }}
                        />
                        <motion.div
                          className="h-2 w-16 bg-white/60 rounded-full"
                          animate={{
                            width: ['20%', '60%', '20%']
                          }}
                          transition={{
                            duration: 2,
                            delay: 0.3,
                            repeat: Infinity,
                            repeatType: 'reverse'
                          }}
                        />
                      </motion.div>
                    ))}

                    {/* AI Processing Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#1a1a1a]"
                      animate={{
                        opacity: [0.2, 0.8, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity
                      }}
                    />
                  </motion.div>
                ) : index === 2 ? (
                  <motion.div
                    className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-lg shadow-2xl relative overflow-hidden"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                  >
                    {/* Credit Card Animation */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-44 md:h-56 bg-gradient-to-br from-[#2F4F2F] to-[#CD853F] rounded-2xl shadow-2xl"
                      initial={{ rotateY: 180, scale: 0.8, z: -100 }}
                      whileInView={{
                        rotateY: [180, 0, -10, 0],
                        scale: [0.8, 1, 1.05, 1],
                        z: [-100, 0]
                      }}
                      transition={{
                        duration: 1.8,
                        times: [0, 0.6, 0.8, 1],
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      {/* Card Chip */}
                      <motion.div
                        className="absolute top-12 left-8 w-12 h-10 bg-[#8B4513] rounded-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: [0, 1.2, 1] }}
                        transition={{ delay: 1, duration: 0.5 }}
                      />

                      {/* Card Numbers */}
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-32 h-4 bg-[#8B4513] rounded-full"
                          style={{ left: 32 + i * 64, width: 48 }}
                          initial={{ opacity: 0, x: -20, scale: 0 }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                            scale: [0, 1.1, 1]
                          }}
                          transition={{
                            delay: 1.2 + i * 0.15,
                            duration: 0.4,
                            type: "spring"
                          }}
                        />
                      ))}

                      {/* Card Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                        animate={{
                          opacity: [0, 0.3, 0],
                          x: [-500, 500]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    </motion.div>

                    {/* Success Checkmark */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{
                        scale: [0, 1.5, 1],
                        opacity: [0, 1, 1]
                      }}
                      transition={{ delay: 2, duration: 0.5 }}
                    >
                      <motion.div
                        className="text-[#CD853F] text-6xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0, -5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      >
                        ✓
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-lg shadow-2xl relative overflow-hidden"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                  >
                    {/* Road */}
                    <motion.div
                      className="absolute bottom-0 w-full h-20 bg-[#2d2d2d]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Road Markings */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 h-2 w-12 bg-[#CD853F]/50"
                          style={{ left: `${i * 20}%` }}
                          animate={{
                            x: [-100, 400],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Truck Animation */}
                    <motion.div
                      className="absolute bottom-20 w-48 md:w-64 h-32 md:h-40"
                      initial={{ x: -200 }}
                      whileInView={{
                        x: [null, 400],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      {/* Truck Body */}
                      <motion.div
                        className="absolute bottom-0 w-full h-24 bg-gradient-to-r from-[#CD853F] to-[#8B4513] rounded-lg shadow-lg"
                        animate={{
                          y: [-2, 2, -2]
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity
                        }}
                      >
                        {/* Truck Window */}
                        <motion.div
                          className="absolute top-2 right-2 w-8 h-8 bg-[#2F4F2F]/80 rounded"
                          animate={{
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity
                          }}
                        />
                      </motion.div>

                      {/* Truck Cabin */}
                      <motion.div
                        className="absolute bottom-0 left-0 w-20 h-16 bg-gradient-to-r from-[#8B4513] to-[#CD853F] rounded-lg shadow-lg"
                        animate={{
                          y: [-1, 1, -1]
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity
                        }}
                      />

                      {/* Wheels with Spokes */}
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute bottom-0 w-10 h-10 bg-[#2F4F2F] rounded-full border-4 border-[#CD853F]"
                          style={{ left: i === 0 ? 12 : 'auto', right: i === 1 ? 12 : 'auto' }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          {/* Wheel Spokes */}
                          {[...Array(4)].map((_, j) => (
                            <motion.div
                              key={j}
                              className="absolute top-1/2 left-1/2 w-1 h-4 bg-[#CD853F]"
                              style={{
                                transform: `translate(-50%, -50%) rotate(${j * 45}deg)`
                              }}
                            />
                          ))}
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Enhanced Dust Cloud Effect */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute bottom-16 left-0"
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{
                          x: [null, 400],
                          opacity: [0, 0.8, 0],
                          y: [0, -20 - i * 8, -40 - i * 8],
                          scale: [0.5, 1 + i * 0.1, 1.5 + i * 0.1]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.15,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      >
                        <div className={`w-4 h-4 rounded-full bg-[#CD853F]/${30 - i * 3}`} />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>

        </section>
      ))}
    </div>
  )
}