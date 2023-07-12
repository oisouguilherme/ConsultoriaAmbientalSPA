import { AboutMe } from "@/components/AboutUs/AboutMe";
import { HeaderAbout } from "@/components/AboutUs/HeaderAbout";
import { MainAbout } from "@/components/AboutUs/MainAbout";
import { OurNumbers } from "@/components/HomePage/OurNumbers";
import { Parceiros } from "@/components/HomePage/Parceiros";
import { Testimonials } from "@/components/HomePage/Testimonials";

export default function Sobre(){
  return(
    <div>
      <HeaderAbout/>
      <MainAbout/>
      <OurNumbers/>
      <AboutMe/>
      <Testimonials/>
      <Parceiros/>
    </div>
  )
}