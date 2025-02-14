import Header from './(home)/Header'
import Hero from './(home)/Hero'
import { Features } from './(home)/Fetaures'
import HowItWorks from './(home)/HowItWorks'
import TestimonialsScattered from './(home)/Testimonials'
import Footer from './(home)/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />

      <TestimonialsScattered />
      <Footer />
    </main>
  )
}
