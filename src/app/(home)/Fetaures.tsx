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
    <div id="services" className="w-full scroll-mt-20">
      {features.map((feature, index) => (
        <section
          key={index}
          className={`h-screen flex items-center justify-center ${feature.bgColor}`}
        >
          <div className="container px-4 md:px-6 max-w-7xl mx-auto py-12 md:py-24">
            {index % 4 === 0 && (
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
                    {/* Camera animation content */}
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
                  <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8" dangerouslySetInnerHTML={{ __html: feature.description }} />
                  <Button size="lg" className="bg-[#2F4F2F] hover:bg-[#3A6A3A] text-white w-full md:w-auto">Learn More</Button>
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
    <div id="about" className="w-full py-24 bg-[#F5F5F5] scroll-mt-20">
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
