import React from 'react';
import {Link} from 'gatsby'
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
  return (
    <Menu>
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/videos">
        Videos
      </Link>
      <Link className="menu-item" to="/photos">
        Photos
      </Link>
      <Link className="menu-item" to="/about">
        About
      </Link>
    </Menu>
  );
};
export default Sidebar