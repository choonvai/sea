import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.jpg";
const Footer = () => {
  const [isCollapsedOutbound, setIsCollapsedOutbound] = useState(false);
  const [isCollapsedInbound, setIsCollapsedInbound] = useState(false);
  const [isCollapsedAbout, setIsCollapsedAbout] = useState(false);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and Copyright */}
        <div className="flex flex-col items-start">
          <img src={Logo} alt="SEA TOURS Logo" className="w-24 mb-4" />
        </div>

        {/* Column 2: Outbound Destinations */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Outbound</h4>
          <ul className="list-none">
            <li>
              <Link 
                to="/outbound/destinations" 
                className="hover:text-blue-400 transition-colors duration-200" 
              >
                Your Dream Destinations
              </Link>
            </li> 
            <li>
              <Link 
                to="/outbound/society-islands" 
                className="hover:text-blue-400 transition-colors duration-200" 
              >
                Society Islands & Tuamotus
              </Link>
            </li>
            <li>
              <Link 
                to="/outbound/antarctica" 
                className="hover:text-blue-400 transition-colors duration-200" 
              >
                Antarctica & The Ross Sea
              </Link>
            </li>
            <li>
              <Link 
                to="/outbound/baltic" 
                className="hover:text-blue-400 transition-colors duration-200" 
              >
                Baltic
              </Link>
            </li>
            <li>
              <Link 
                to="/outbound/mediterranean" 
                className="hover:text-blue-400 transition-colors duration-200" 
              >
                Mediterranean
              </Link>
            </li>
            <li>
              <Link 
                to="/outbound/galapagos" 
                className="hover:text-blue-400 transition-colors duration-200" 
              >
                Galapagos
              </Link>
            </li>
            <li>
              <Link 
                to="/outbound/easter-island" 
                className="hover:text-blue-400 transition-colors duration-200" 
              >
                Easter Island
              </Link>
            </li>
            <li>
              <Link 
                to="/outbound/greenland" 
                className="hover:text-blue-400 transition-colors duration-200" 
              >
                Greenland
              </Link>
            </li>
          </ul>
          <p><Link to="/products" className="text-blue-400 hover:underline">Our Products</Link></p>
        </div>

        {/* Column 3: Inbound Destinations */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">Inbound</h4>
            <button 
              className="md:hidden" 
              onClick={() => setIsCollapsedInbound(!isCollapsedInbound)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="inline-block">
                <path d="M19.707 10.293a1 1 0 00-1.414-1.414l-8-8a1 1 0 00-1.414 0l-8 8a1 1 0 101.414 1.414L9 5.707l7.293 7.293z"/>
              </svg>
            </button>
          </div>
          <ul className={`list-none ${isCollapsedInbound ? 'hidden md:block' : 'block'}`}>
            <li><Link to="/inbound/thailand">Thailand's Destinations</Link></li>
            {/* ... other inbound destinations */}
          </ul>
        </div>

        {/* Column 4: About Us, Contact Us, Social Media */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">About Us</h4>
            <button 
              className="md:hidden" 
              onClick={() => setIsCollapsedAbout(!isCollapsedAbout)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="inline-block">
                <path d="M19.707 10.293a1 1 0 00-1.414-1.414l-8-8a1 1 0 00-1.414 0l-8 8a1 1 0 101.414 1.414L9 5.707l7.293 7.293z"/>
              </svg>
            </button>
          </div>
          <ul className={`list-none ${isCollapsedAbout ? 'hidden md:block' : 'block'}`}>
            <li><Link to="/about/sustainability">Sustainability</Link></li>
            <li><Link to="/about/awards">Awards</Link></li>
            <li><Link to="/about/acsn">ACSN</Link></li>
          </ul>

          <p><Link to="/contact" className="text-blue-400 hover:underline">Contact Us</Link></p>
          <div className="flex items-center mt-4">
            <a href="https://www.facebook.com/SEATours.Thailand" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="mr-2">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3zm-6 0C7 2 0 7 0 7s7 5 7 5S15 9 18 9s5 5 5 5v3h-3v-4c0-2-2-4-4-4z"/>
              </svg>
            </a>
            <span>SEA Tours, Thailand</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm">© 2019 SEA Tours Company Limited. All Rights Reserved.</p>
        <div className="flex justify-center mt-2">
          <Link to="/privacy-policy" className="mr-2">Privacy & Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;