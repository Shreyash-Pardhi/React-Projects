import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import { homeCarouselData } from './homeCarouselData';
import AliceCarousel from 'react-alice-carousel';

export const HomeCarousel = () => {
    const items = homeCarouselData.map((item)=><img className= 'cursor-pointer -z-10'
    role='presentation' src={item.image} alt=""/>)
  
return (
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1500}
    infinite
/>
  )
}
 
export default HomeCarousel