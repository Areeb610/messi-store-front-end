import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';

import './home.css'
import Footer from '../../components/Footer/footer';
export default function Home() {
  return (
    <>
    <Navbar/>
    <MDBCarousel interval={2800} >
      <MDBCarouselItem itemId={1}>
        <img src='car-1.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='car-2.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='car-3.jpg' className='d-block w-100' alt='...' />

      </MDBCarouselItem>
    </MDBCarousel>
    
    <div className="about-us">
    <h1>About Us</h1>
      <p>Our mission is to provide the best quality products at the best price. We are a small business that is dedicated to providing the best customer service possible. We want to make sure that you are satisfied with your purchase, so we offer a 30 day return policy on all of our products. If you have any questions or concerns about your order, please contact us at any time!</p>
    </div>
    <Footer/>
    
    </>
  )
}
