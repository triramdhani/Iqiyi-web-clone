import React, {useState, useEffect} from 'react'
import { arrFeaturedShow } from '../data/Slider'

const HeaderSlider = () => {
  const [activeFeaturedSlide,setSlide] = useState({})

  useEffect(() => {
    setSlide(arrFeaturedShow[0])
  }, [])
  
  const handlePrevSlide = () => {
    const currentPosition = activeFeaturedSlide.position
    if (currentPosition === 0) {
      setSlide(arrFeaturedShow[5])
    } else if (currentPosition !== 0) {
      setSlide(prev=>arrFeaturedShow[prev.position - 1])
    }
  }
  const handleNextSlide = () => {
    const currentPosition = activeFeaturedSlide.position
    if (currentPosition === 5) {
      setSlide(arrFeaturedShow[0])
    } else if (currentPosition !== 5) {
      setSlide(prev=>arrFeaturedShow[prev.position + 1])
    }
  }

  return (
    <>
      <div>
        <p>name : {activeFeaturedSlide.name}</p>
        <p>rating: {activeFeaturedSlide.rating}</p>
      </div>
      <div>

      position: {activeFeaturedSlide.position}
      </div>
      <button onClick={handlePrevSlide}>PREV</button>
      <button onClick={handleNextSlide}>NEXT</button>
    </>
  )
}

export default HeaderSlider