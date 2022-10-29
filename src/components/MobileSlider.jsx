import { useState, useEffect } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { arrFeaturedShow } from '../data/Slider'

const MobileSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex]= useState(0)
  useEffect(() => {
    console.log(activeSlideIndex)
  },[activeSlideIndex])
  let tag = {
    firstLine: ['top 1', 'highpopularity', 'original'],
    secondLine: [9.4, '2022', '25 episode'] ,
    // categoryTag: ["mistery", "doujinsh", "adventure",],
    // aboutMovie : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam.'
  }
  return (
    <Swiper
      slidesPerView={1}
      direction={'horizontal'}
      modules={[Autoplay]}
      loop= {true}
      speed={1000}
      autoplay={{delay: 3000 ,disableOnInteraction: false}}
      onSlideChange={(e)=>setActiveSlideIndex(e.realIndex)}
    >
      <SwiperSlide>        
        <div className="bg-[url('./download.jpg')] w-full h-[237px] sm:h-[300px] bg-cover bg-no-repeat ">
          <div className="text-white ">
            {tag.firstLine.map((item,index) => {
              return (
                <span key={item} className={`p-[1px] rounded-[1px] ${index === 0 || index === 2 ? 'bg-green-500':  'mr-1 bg-slate-300'}`}>{item}</span>
              )
            })}
          </div>
          <div>
            {tag.secondLine.map(item => {
              return (
                <span key={item}>{item}</span>
              )
            })}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>        
        <div className="bg-[url('./download.jpg')] w-[100vw] h-[237px] sm:h-[300px] bg-cover bg-no-repeat">
          <div className="text-white ">
            {tag.firstLine.map((item,index) => {
              return (
                <span key={item} className={`p-[1px] rounded-[1px] ${index === 0 || index === 2 ? 'bg-green-500':  'mr-1 bg-slate-300'}`}>{item}</span>
              )
            })}
          </div>
          <div>
            {tag.secondLine.map(item => {
              return (
                <span key={item}>{item}</span>
              )
            })}
          </div>
        </div>
      </SwiperSlide>
          <button >next</button>

    </Swiper>

  )
}

export default MobileSlider