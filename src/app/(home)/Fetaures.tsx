'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Truck } from 'lucide-react'

export function Features() {
  const features = [
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
          <div className="container px-6 md:px-8 max-w-7xl mx-auto py-16 md:py-32">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-center lg:text-left space-y-8">
                <motion.div
                  className="inline-block bg-white/90 rounded-full p-5 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  {feature.title}
                </h2>
                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
                <Button
                  size="lg"
                  className="bg-[#CD853F] hover:bg-[#8B4513] text-white text-lg px-4 py-2 h-auto transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    bg: "bg-[#CD853F]",
                    icon: "🌳",
                    text: "Eco-Friendly"
                  },
                  {
                    bg: "bg-[#2F4F2F]",
                    icon: "♻️",
                    text: "Sustainable"
                  },
                  {
                    bg: "bg-[#8B4513]",
                    icon: "🌱",
                    text: "Green Future"
                  },
                  {
                    bg: "bg-[#556B2F]",
                    icon: "🌍",
                    text: "Earth First"
                  }
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    className={`h-[200px] ${card.bg} rounded-xl shadow-2xl relative overflow-hidden group cursor-pointer`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      delay: 0.15 * i,
                      duration: 0.3
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                      <span className="text-6xl mb-4 filter drop-shadow-lg">{card.icon}</span>
                      <span className="text-xl font-bold text-white tracking-wide shadow-text">
                        {card.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}
