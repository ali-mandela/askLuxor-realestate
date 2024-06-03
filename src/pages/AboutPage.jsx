import { useEffect } from "react";
import AboutSection from "../sections/AboutSection"
import AgentSection from "../sections/AgentSection"
import TestimonialSection from "../sections/TestimonialSection"

 
const AboutPage = () => {

  useEffect(() => {
    document.title = 'About | askLuxor';
  }, []);
  return (
    <>
      <AboutSection/>
    <AgentSection/>
      <TestimonialSection/>
    </>
  )
}

export default AboutPage