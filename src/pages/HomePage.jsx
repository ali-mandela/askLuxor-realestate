 
import About from "../components/About"
import Filter from "../components/Filter"
import AgentSection from "../sections/AgentSection"
import FooterSection from "../sections/FooterSection" 
import ProperySection from "../sections/ProperySection"
import TestimonialSection from "../sections/TestimonialSection" 
 
 
const HomePage = () => {
  return (
   
    <>  
    <Filter/>
    <About/>
    <ProperySection/>
      <AgentSection/>
     <TestimonialSection/>
      <FooterSection/>
    </>
  )
}

export default HomePage