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

  const azure_text = "azure"
  const excel_text = "excel"
  const toolbox_text = "toolbox"

  return (
    <div>
      <h1>Licenses & certifications</h1>
      {/* Javascript function shown images of certificates with the title */}
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img className='cert' src={azure} alt="Image 1"/>
          <p>{azure_text}</p>
        </SplideSlide>
        <SplideSlide>
          <img className='cert' src={excel} alt="Image 2"/>
          <p>{excel_text}</p>
        </SplideSlide>
        <SplideSlide>
          <img className='cert' src={toolbox} alt="Image 3"/>
          <p>{toolbox_text}</p>
        </SplideSlide>
      </Splide>
    </div>
  )
}



export default Homepage_2