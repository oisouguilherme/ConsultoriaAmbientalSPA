import { AboutBiolog } from "@/components/AboutUs/AboutBiolog";
import { AboutMe } from "@/components/AboutUs/AboutMe";
import { HeaderAbout } from "@/components/AboutUs/HeaderAbout";
import { MainAbout } from "@/components/AboutUs/MainAbout";
import { Parceiros } from "@/components/HomePage/Parceiros";
import { Testimonials } from "@/components/HomePage/Testimonials";

export default function Sobre(){
  return(
    <div>
      <HeaderAbout/>
      <MainAbout/>
      <AboutMe/>
      <AboutBiolog/>
      <Testimonials/>
    </div>
  )
}