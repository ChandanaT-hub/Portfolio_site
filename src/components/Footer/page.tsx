// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-800 text-white py-4">
      {/* <div className="px-4"> */}
        <div className="flex justify-between items-center">
          <p>2024 Chandana_T. All rights reserved.</p>
          <ul className="flex gap-x-4">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
