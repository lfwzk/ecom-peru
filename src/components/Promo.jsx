import React from 'react'
import img1 from "../components/images/imagen-banner-full.jpeg"
import img2 from "../components/images/imagen-banner-full-0.jpeg"
import img3 from "../components/images/imagen-banne-full-2.jpeg"


export const Promo = () => {
  return (
    <>
    <div className ="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-10">
  <div className ="rounded-lg lg:col-span-2">
    <img className ="h-full w-full object-cover rounded-lg" src={img1} alt="img1" />

  </div>
  <div className =" rounded-lg">
    <img className ="h-full w-full object-cover rounded-lg" src={img3} alt="img1" />
  </div>
  <div className ="rounded-lg ">
    <img className ="h-full w-full object-cover rounded-lg" src={img2} alt="img1" />
  </div>
</div>
    </>
  )
}
