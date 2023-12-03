import React from 'react';
import {useState, useEffect} from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((error) => {
        console.error('Error:', error);
      }
      );  
  }, []);
 

  return (
    <div>
      <h2 className="mb-4">Our Products</h2>
      <div className="d-flex flex-wrap justify-content-around">
        {products.map((product) => (
          <MDBCard key={product.id} className="mb-4" style={{ width: '18rem' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={product.image} alt={`Product ${product.id}`} fluid />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>{product.description}</MDBCardTitle>
              <MDBCardText>{`Price: ${product.price}`}</MDBCardText>
              <MDBBtn>Add to Cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
