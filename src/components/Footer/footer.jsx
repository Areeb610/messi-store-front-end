// Footer.js
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-dark text-white py-5">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to = "/stats">Messi Stats</Link></li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5>Follow Us</h5>
            <MDBIcon fab icon="facebook" className="me-3" />
            <MDBIcon fab icon="twitter" className="me-3" />
            <MDBIcon fab icon="instagram" className="me-3" />
            <MDBIcon fab icon="linkedin" className="me-3" />
          </MDBCol>
          <MDBCol md="4">
            <h5>Subscribe to Our Newsletter</h5>
            <MDBInput type="email" label="Email" outline className="mb-2" />
            <MDBBtn color="light">Subscribe</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Footer;
