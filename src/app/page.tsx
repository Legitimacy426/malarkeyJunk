import Header from './(home)/Header'
import Hero from './(home)/Hero'
import { Features, HowItWorks } from './(home)/Fetaures'
import TestimonialsScattered from './(home)/Testimonials'
import Footer from './(home)/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <TestimonialsScattered />
      <Footer />
    </main>
  )
}
