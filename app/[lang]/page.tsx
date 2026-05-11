import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import Catalog from '@/components/Catalog/Catalog'
import Shipping from '@/components/Shipping/Shipping'
import Contact from '@/components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Catalog />
        <Shipping />
        <Contact />
      </main>
    </>
  )
}
