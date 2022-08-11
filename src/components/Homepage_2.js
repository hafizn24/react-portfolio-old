import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import azure from './img/azure.jpg'
import excel from './img/excel.jpg'
import toolbox from './img/toolbox.jpg'

function Homepage_2({color}) {
  const onClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <h1>Licenses & certifications</h1>
      {/* Javascript function shown images of certificates with the title */}
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img className='cert' src={azure} alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img className='cert' src={excel} alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <img className='cert' src={toolbox} alt="Image 3"/>
        </SplideSlide>
      </Splide>
    </div>
  )
}



export default Homepage_2