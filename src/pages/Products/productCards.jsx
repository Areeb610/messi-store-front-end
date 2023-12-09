import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const addToCart = (productId) => {
    // For simplicity, you can replace this with your user authentication mechanism
    const userId = 'someUserId';

    // Send a request to your backend API to add the product to the user's cart
    fetch('http://localhost:8080/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        productId,
        quantity: 1, // You can modify this based on your requirements
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Log the response from the backend
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2 className="mb-4">Our Products</h2>
      <div className="d-flex flex-wrap justify-content-around">
        {products.map((product) => (
          <MDBCard key={product._id} className="mb-4" style={{ width: '18rem' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={product.image} alt={`Product ${product._id}`} fluid />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>{product.name}</MDBCardTitle>
              <MDBCardText>{`Price: ${product.price}`}</MDBCardText>
              <MDBBtn onClick={() => addToCart(product._id)}>Add to Cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
