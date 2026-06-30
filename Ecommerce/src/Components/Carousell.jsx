import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carousell = () => {
  return (
                <Carousel infiniteLoop={true} showThumbs={false} autoPlay={true}
                interval={500} showArrows={false} showStatus={false} showIndicators={false}>
                <div>
                    <img className='h-[90vh]' src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" />
                  
                </div>
                <div>
                    <img className='h-[90vh]' src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" />
                    
                </div>
                <div>
                    <img className='h-[90vh]' src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b" />
                    
                </div>
            </Carousel>

  )
}

export default Carousell
