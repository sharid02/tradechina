import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Audience from '../sections/Audience'
import Services from '../sections/Services'
import Process from '../sections/Process'
import WhyUs from '../sections/WhyUs'
import Testimonials from '../sections/Testimonials'
import CtaBanner from '../sections/CtaBanner'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
