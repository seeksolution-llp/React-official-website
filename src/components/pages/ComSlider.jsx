import React, { useEffect } from 'react'
import Slider from 'react-slick';
import Data from "../../components/image_json/cumpony.json"

const ComSlider = () => {
  
    const settings = {
        className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      
      swipeToSlide: true,
      afterChange: function(index) {
      
      }
      };

  return (
    <div>
         <Slider {...settings}>

{
  Data.map((value)=>(
      <div key={ value.id} className='  bg-white h-auto  py-6  hover:border-transparent shadow-none hover:shadow-testShadow duration-200  items-center px-6 cursor-pointer rounded-md    ' >
      
      <h3>
         <img src={value.image} className=' w-52 h-52 object-contain mx-auto ' alt="" />
     </h3>
    
   
      </div>
 ))
}

</Slider>
    </div>
  )
}

export default ComSlider