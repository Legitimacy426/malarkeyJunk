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
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-44 md:h-56 bg-gradient-to-br from-[#2F4F2F] to-[#CD853F] rounded-2xl shadow-2xl p-6"
                      initial={{ rotateY: 180, scale: 0.8, z: -100 }}
                      whileInView={{
                        rotateY: [180, 0],
                        scale: 1,
                        z: 0
                      }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      {/* Bank Logo */}
                      <motion.div
                        className="absolute top-6 right-6 text-white/90 text-xl font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        JUNKBANK
                      </motion.div>

                      {/* EMV Chip */}
                      <motion.div
                        className="absolute top-16 left-6 w-12 h-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        <div className="w-full h-full bg-[#8B4513] rounded-md grid grid-cols-3 grid-rows-3 gap-[1px] p-[2px]">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-[#CD853F]/60" />
                          ))}
                        </div>
                      </motion.div>

                      {/* Card Number */}
                      <motion.div
                        className="absolute top-32 left-6 flex gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                      >
                        {['4929', '****', '****', '1234'].map((group, i) => (
                          <div key={i} className="text-white/90 font-mono text-lg md:text-xl">
                            {group}
                          </div>
                        ))}
                      </motion.div>

                      {/* Cardholder Name & Expiry */}
                      <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                        <motion.div
                          className="text-white/90 font-mono"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 1.6 }}
                        >
                          JOHN DOE
                        </motion.div>
                        <motion.div
                          className="text-white/90 font-mono"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 1.8 }}
                        >
                          12/25
                        </motion.div>
                      </div>

                      {/* Hologram Effect */}
                      <motion.div
                        className="absolute right-12 bottom-12 w-16 h-16 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          opacity: [0.2, 0.5, 0.2],
                          scale: [0.8, 1.1, 0.8],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />

                      {/* Card Surface Reflection */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                        animate={{
                          opacity: [0, 0.1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
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
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 1,
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
                    {/* Sky with Moving Clouds */}
                    <motion.div className="absolute inset-0 bg-gradient-to-b from-[#4A3220] to-[#8B4513]">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute h-12 bg-white/10 rounded-full blur-md"
                          style={{
                            width: 100 + i * 50,
                            top: 20 + i * 30,
                          }}
                          animate={{
                            x: [-200, window.innerWidth],
                            opacity: [0.4, 0.6, 0.4]
                          }}
                          transition={{
                            duration: 15 + i * 5,
                            repeat: Infinity,
                            delay: i * 2
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Road with Perspective */}
                    <motion.div
                      className="absolute bottom-0 w-full h-40 bg-[#2d2d2d]"
                      style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",

                      }}
                    >
                      {/* Road Markings with Perspective */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 bg-[#CD853F]"
                          style={{
                            height: 20,
                            bottom: 70, // Moved up by increasing bottom value
                            left: "50%",
                            transform: `translateY(-50%) translateX(-50%)`,
                            transformStyle: "preserve-3d",
                          }}
                          animate={{
                            scaleX: [1, 2],
                            x: [300, -300]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "linear"
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Truck with Enhanced Details */}
                    <motion.div
                      className="absolute bottom-20 w-64 h-48"
                      style={{ left: "30%" }}
                      animate={{
                        y: [-2, 2, -2]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Truck Cabin */}
                      <motion.div
                        className="absolute bottom-0 left-0 w-24 h-20 bg-gradient-to-r from-[#CD853F] to-[#8B4513] rounded-lg"
                        style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.3)" }}
                      >
                        {/* Windshield */}
                        <div className="absolute top-2 right-2 w-12 h-10 bg-[#2F4F2F]/80 rounded-sm transform skew-x-12" />
                        {/* Headlight */}
                        <motion.div
                          className="absolute bottom-4 left-2 w-4 h-4 bg-yellow-200 rounded-full"
                          animate={{
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity
                          }}
                        />
                      </motion.div>

                      {/* Truck Body */}
                      <motion.div
                        className="absolute bottom-0 left-20 w-44 h-32 bg-gradient-to-r from-[#8B4513] to-[#CD853F] rounded-lg"
                        style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.3)" }}
                      >
                        {/* Company Logo */}
                        <motion.div
                          className="absolute top-4 left-4 text-white font-bold text-xl"
                          animate={{
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        >
                        Malarkey Junk
                        </motion.div>
                      </motion.div>

                      {/* Wheels with Dynamic Animation */}
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute bottom-[-8px] w-12 h-12"
                          style={{
                            left: i < 2 ? 8 + i * 16 : 36 + i * 16
                          }}
                        >
                          <motion.div
                            className="w-full h-full rounded-full bg-[#2F4F2F] border-4 border-[#CD853F]"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          >
                            {/* Wheel Spokes */}
                            {[...Array(6)].map((_, j) => (
                              <motion.div
                                key={j}
                                className="absolute top-1/2 left-1/2 w-1 h-4 bg-[#CD853F]"
                                style={{
                                  transform: `translate(-50%, -50%) rotate(${j * 60}deg)`
                                }}
                              />
                            ))}
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Enhanced Dust and Debris Effects */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{
                          bottom: 20 + Math.random() * 40,
                          left: "60%"
                        }}
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                          x: [0, 100 + i * 20],
                          y: [-20 - i * 10, -40 - i * 15],
                          opacity: [0, 0.8, 0],
                          scale: [0.5, 1 + i * 0.1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-[#CD853F]/${40 - i * 2}`} />
                      </motion.div>
                    ))}

                    {/* Environmental Particles */}
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20"
                        style={{
                          left: Math.random() * 100 + "%",
                          top: Math.random() * 100 + "%"
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                      />
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