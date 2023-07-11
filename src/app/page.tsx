import { About } from '@/components/HomePage/About'
import { Parceiros } from '@/components/HomePage/Parceiros'
import { Services } from '@/components/HomePage/ServiceHome/Services'
import { SlideMain } from '@/components/HomePage/SlideMain'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <SlideMain/>
      <Services/>
      <About/>
      <Parceiros/>
    </div>
  )
}
