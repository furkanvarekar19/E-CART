import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../src/App.css'
// impor ExampleCarouselImage from 'components/ExampleCarouselImage';
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarouselCaption from 'react-bootstrap/CarouselCaption'



const Adds = () => {

  return (
 
    <>
   
    <Carousel className='a'>

      <CarouselItem >
     
        <div className='images'>
       <video src="https://www.apple.com/105/media/us/mac/family/2023/1b2bbf5c-ddc5-44a1-9dfb-7a51c49143fa/anim/welcome/xlarge_2x.mp4" autoPlay muted loop>
    
       </video>
    </div>
       
      </CarouselItem>


      <CarouselItem>
       
        <div className='images'>
        <video src="https://www.apple.com/105/media/in/ipad-pro/2022/08087f4b-7539-4b1e-ae8a-adc18f4242ae/anim/hero/large_2x.mp4" autoPlay muted loop>
    
      </video>
      </div>
      
      </CarouselItem>


      <CarouselItem>
      
        <div className='images'>
       <video src="https://www.apple.com/105/media/ww/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/hero/large_2x.mp4  " autoPlay muted loop>
    
        </video>
      </div>
    
      </CarouselItem>
      <CarouselItem>
      
      <div className='images'>
     <video src="https://images.samsung.com/is/content/samsung/assets/in/unpacked/teaser_video_desktop.mp4 " autoPlay muted loop>
  
      </video>
    </div>
  
    </CarouselItem>

    </Carousel>
    
    </>
  )
}

export default Adds