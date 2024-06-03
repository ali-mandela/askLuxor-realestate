 import Filter from "../components/Filter"
import LayoutContainer from "../components/Layout"
import SearchProperties from "../components/SearchProperties"
import TestimonialSection from "../sections/TestimonialSection"

 
const PropertyPage = () => {

  return (
    <>
      <Filter/>
      <LayoutContainer> 
        <SearchProperties/>   
      </LayoutContainer>
      <TestimonialSection/>
    </>
  )
}

export default PropertyPage