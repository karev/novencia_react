import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <Link href="/" to="/">Home route</Link>
    <Link href="/test" to="/test">Test route</Link>
  </div>
);

export default Header;
