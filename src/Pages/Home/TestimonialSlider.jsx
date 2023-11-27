
'use client';

import { Carousel } from 'flowbite-react';
import Testimonial from './Testimonial';

function TestimonialSlider() {
  return (
    <div className='py-[100px]'>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center" style={{backgroundColor: '#4D1E72'}}>
          <Testimonial></Testimonial>
        </div>
        <div className="flex h-full items-center justify-center" style={{backgroundColor: '#4D1E72'}}>
          <Testimonial></Testimonial>
        </div>
        <div className="flex h-full items-center justify-center" style={{backgroundColor: '#4D1E72'}}>
          <Testimonial></Testimonial>
        </div>
      </Carousel>
    </div>
    </div>
  );
}
export default TestimonialSlider;
