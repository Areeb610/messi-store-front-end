import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import ProductCards from './productCards';
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
