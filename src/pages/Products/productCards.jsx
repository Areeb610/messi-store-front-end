import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

const ProductCards = () => {
  // Sample data for products
  const products = [
    { id: 1, image: 'card-1.jpg', description: 'Product 1', price: '$19.99' },
    { id: 2, image: 'card-1.jpg', description: 'Product 2', price: '$29.99' },
    { id: 3, image: 'card-1.jpg', description: 'Product 3', price: '$39.99' },
    // Add more products as needed
  ];

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
