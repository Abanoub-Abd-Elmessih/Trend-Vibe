import React from 'react'
import { assets } from '../assets/assets'

export default function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border'>
        {/* Hero Left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className="text-gray-500">
                <div className="flex items-center gap-2">
                    <p className='w-8 md:w-11 h-0.5 bg-gray-500'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h2 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular'>Latest Arrivals</h2>
                <div className="flex items-center gap-2">
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-0.5 bg-gray-500'></p>
                </div>
            </div>
        </div>
        {/* Hero Right Side */}
        <img src={assets.hero_img} className='w-full sm:w-1/2 ' alt="Hero Img" />
    </div>
  )
}
