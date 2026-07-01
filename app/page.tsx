import Link from 'next/link'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import About from '@/components/About'
import Products from '@/components/Products'
import TechnicalSpec from '@/components/TechnicalSpec'
import WhyUs from '@/components/WhyUs'
import Partners from '@/components/Partners'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SectionDivider from '@/components/SectionDivider'
import CarouselSection from '@/components/CarouselSection'
import PostCard from '@/components/PostCard'
import EventCard from '@/components/EventCard'
import { getCatalog, getPosts, getEvents } from '@/app/lib/content'

function EmptyCarouselNote({ text }: { text: string }) {
  return (
    <div style={{ padding: '40px 4px', fontFamily: 'var(--font-sans), sans-serif', fontSize: '14px', color: '#9FB0D0' }}>
      {text} — เพิ่มเนื้อหาได้ที่หน้า{' '}
      <Link href="/studio" style={{ color: '#78c1ff', fontWeight: 600 }}>
        /studio
      </Link>
    </div>
  )
}

export default async function Home() {
  const [{ products, productImages }, posts, events] = await Promise.all([
    getCatalog(),
    getPosts(),
    getEvents(),
  ])

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
        <Products products={products} productImages={productImages} />
        <SectionDivider />

        <CarouselSection
          id="blog"
          label="Knowledge Blog"
          title="บทความความรู้"
          description="บทความและองค์ความรู้ด้านชุดฝึกวิศวกรรม เทคโนโลยีการเรียนการสอน และงานอบรม"
          href="/blog"
          hrefText="ดูบทความทั้งหมด →"
          dark
          background="linear-gradient(180deg, #0A1B45 0%, #0C2155 100%)"
          fadeColor="#0B1E4D"
        >
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <EmptyCarouselNote text="ยังไม่มีบทความในขณะนี้" />
          )}
        </CarouselSection>

        <SectionDivider />

        <CarouselSection
          id="events"
          label="Events & Activities"
          title="กิจกรรมที่ผ่านมา"
          description="งานอบรม สัมมนา และกิจกรรมด้านการเรียนการสอนเชิงเทคนิคของ NuTras Didactic"
          href="/events"
          hrefText="ดูกิจกรรมทั้งหมด →"
          background="linear-gradient(180deg, #F7F9FE 0%, #E9F0FB 100%)"
          fadeColor="#F1F5FC"
        >
          {events.length > 0 ? (
            events.map((ev) => <EventCard key={ev.id} event={ev} />)
          ) : (
            <EmptyCarouselNote text="ยังไม่มีกิจกรรมในขณะนี้" />
          )}
        </CarouselSection>

        <SectionDivider />
        <TechnicalSpec />
        <SectionDivider />
        <WhyUs />
        <SectionDivider />
        <Partners />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
