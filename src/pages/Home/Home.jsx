import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import ProductCards from '../Products/productCards';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

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
    <ProductCards/>
    <Footer/>
    
    </>
  )
}
