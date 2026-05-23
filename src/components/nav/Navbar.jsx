import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '/images/degrills-logo.png';
import { links } from '../../data';
import './Navbar.css';
import { MdClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavShowing, setIsNavShowing] = useState(false);
  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    if (touchStartX.current - touchEndX > 80) {
      setIsNavShowing(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'window-scrolled' : ''}`}>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo Image" />
        </Link>
        <ul onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} onClick={() => setIsNavShowing(false)} className={({ isActive }) => (isActive ? 'active-nav' : '')}>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="nav__actions">
          <Link to="/contact" className="shop__now">
            Get in Touch
          </Link>
        </div>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <MdClose /> : <HiOutlineMenu />}
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
