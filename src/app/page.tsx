import { About } from '@/components/HomePage/About'
import { Footer } from '@/components/HomePage/Footer'
import Header from '@/components/HomePage/Header'
import { OurNumbers } from '@/components/HomePage/OurNumbers'
import { Parceiros } from '@/components/HomePage/Parceiros'
import { Projects } from '@/components/HomePage/Projects'
import { RecentBlog } from '@/components/HomePage/RecentBlogHome/RecentBlog'
import { Services } from '@/components/HomePage/ServiceHome/Services'
import { SlideMain } from '@/components/HomePage/SlideMain'
import { Testimonials } from '@/components/HomePage/Testimonials'

export default function Home() {
  return (
    <div>
      <Header/>
      <SlideMain/>
      <Services/>
      <About/>
      <Parceiros/>
      <OurNumbers/>
      <Projects/>
      <Testimonials/>
      <RecentBlog/>
      <Footer/>
    </div>
  )
}
