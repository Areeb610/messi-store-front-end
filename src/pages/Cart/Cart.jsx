import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdb-react-ui-kit';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchCartFromServer = async () => {
    try {
      const response = await fetch('http://localhost:3000/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'user-id': 'someUserId', // Replace with actual user ID or implement user authentication
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCartItems(data.cartItems);
        calculateTotal(data.cartItems);
      } else {
        console.error('Failed to fetch cart from server');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const calculateTotal = (cartItems) => {
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    setTotal(totalAmount);
  };

  const increaseQuantity = async (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    await updateCartOnServer(updatedCart);
  };

  const decreaseQuantity = async (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    await updateCartOnServer(updatedCart);
  };

  const removeItem = async (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    await updateCartOnServer(updatedCart);
  };

  const clearCart = async () => {
    setCartItems([]);
    setTotal(0);
    await updateCartOnServer([]);
  };

  const updateCartOnServer = async (updatedCart) => {
    try {
      await fetch('http://localhost:3000/cart/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user-id': 'USER_ID', // Replace with actual user ID or implement user authentication
        },
        body: JSON.stringify({ cartItems: updatedCart }),
      });
    } catch (error) {
      console.error('Error updating cart on server:', error);
    }
  };

  const continueShopping = () => {
    window.location.href = '/products';
  };

  useEffect(() => {
    fetchCartFromServer();
  }, []); // Fetch cart data when the component mounts

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
                    <MDBBtn size="sm" color="info" onClick={() => increaseQuantity(item.id)}>
                      +
                    </MDBBtn>
                    <span className="mx-2">{item.quantity}</span>
                    <MDBBtn size="sm" color="info" onClick={() => decreaseQuantity(item.id)}>
                      -
                    </MDBBtn>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <MDBBtn size="sm" color="danger" onClick={() => removeItem(item.id)}>
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
          <MDBBtn color="primary" onClick={continueShopping}>
            Continue Shopping
          </MDBBtn>
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
