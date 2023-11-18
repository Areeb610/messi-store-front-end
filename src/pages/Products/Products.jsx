import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import ProductCards from './productCards';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import Footer from '../../components/Footer/footer';

const Products = () => {
 
  return (
    <div>
      <Navbar />
      <ProductCards/>
      <Footer/>

    </div>
  );
};

export default Products;
