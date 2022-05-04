import React from 'react';
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
  return (
    <Menu>
      <Link  to="/"> Home </Link>
      <Link  to="/videos"> Videos </Link>
      <Link  to="/photos"> Photos </Link>
      <Link  to="/about"> About </Link>
    </Menu>
  );
};
export default Sidebar