import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar-first">
        <div className="contact">
          <h5>
            <i className="fa-regular fa-envelope"></i>
            info@example.com
          </h5>
          <h5>
            <i className="fa-solid fa-phone"></i>
            +1 123 456 7890
          </h5>
        </div>
        <div className="policy">
          <h5>Privacy Policy</h5>
          <h5>Terms & Conditions</h5>
        </div>
      </div>
    </>
  )
}

export default Navbar