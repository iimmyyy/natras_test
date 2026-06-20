import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import About from '@/components/About'
import Products from '@/components/Products'
import TechnicalSpec from '@/components/TechnicalSpec'
import WhyUs from '@/components/WhyUs'
import Partners from '@/components/Partners'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <TrustStrip />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Products />
        <SectionDivider />
        <TechnicalSpec />
        <SectionDivider />
        <WhyUs />
        <SectionDivider />
        <Partners />
        <SectionDivider />
        <Blog />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
