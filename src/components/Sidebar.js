import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/videos">
        Videos
      </a>
      <a className="menu-item" href="/photos">
        Photos
      </a>
      <a className="menu-item" href="/links">
        Links
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
    </Menu>
  );
};
export default Sidebar