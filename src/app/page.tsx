import Hero from './(home)/Hero'
import Testimonials from './(home)/Testimonials'
import Footer from './(home)/Footer'
import ChatFab from './(home)/ChatFab'
import { Features } from './(home)/Fetaures'
import Header from './(home)/Header'
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <Features />

      <Testimonials />

      <Footer />
      <ChatFab />
    </main>
  )
}

