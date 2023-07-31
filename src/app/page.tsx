import { About } from '@/components/HomePage/About'
import { AboutConsultor } from '@/components/HomePage/AboutConsultor'
import { Projects } from '@/components/HomePage/Projects'
import { RecentBlog } from '@/components/HomePage/RecentBlogHome/RecentBlog'
import { Services } from '@/components/HomePage/ServiceHome/Services'
import { SlideMain } from '@/components/HomePage/SlideMain'
import { Testimonials } from '@/components/HomePage/Testimonials'

export default function Home() {
  return (
    <div>
      <SlideMain />
      <AboutConsultor />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <RecentBlog />
    </div>
  );
}
