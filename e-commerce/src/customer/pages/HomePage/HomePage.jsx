import React from 'react'
import HomeCarousel from '../../components/homeCarousel/homeCarousel'
import HomeSectionCardCarousel from '../../components/HomeSectionCardCarousel/HomeSectionCardCarousel'
import { mens_kurta } from '../../../Data/Mens_Kurta'

const HomePage = () => {
  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCardCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCardCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCardCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCardCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCardCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
      </div>

    </div>
  )
}

export default HomePage