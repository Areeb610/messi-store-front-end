// CartPage.js
import React, { useState } from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdb-react-ui-kit';

const Cart = () => {
  // Sample data for cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
    // Add more items as needed
  ]);

  // Calculate the total cost
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  // Increase the quantity of a cart item
  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease the quantity of a cart item
  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Remove a cart item
  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  const continueShopping = () => {
    window.location.href = "/products";
  }

  return (
    <div>
      <Navbar />
      <MDBContainer className="my-5">
        <h2 className="mb-4">Shopping Cart</h2>
        {cartItems.length > 0 ? (
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <MDBBtn
                      size="sm"
                      color="info"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </MDBBtn>
                    <span className="mx-2">{item.quantity}</span>
                    <MDBBtn
                      size="sm"
                      color="info"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </MDBBtn>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <MDBBtn
                      size="sm"
                      color="danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </MDBBtn>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="d-flex justify-content-between mt-4">
          <MDBBtn color="danger" onClick={clearCart}>
            Clear Cart
          </MDBBtn>
          <MDBBtn color="primary" onClick={continueShopping}>Continue Shopping</MDBBtn>
        </div>
        {cartItems.length > 0 && (
          <div className="mt-4">
            <h4>Total: ${total}</h4>
            <MDBBtn color="success">Checkout</MDBBtn>
          </div>
        )}
      </MDBContainer>
        <Footer />
    </div>
  );
};

export default Cart;
