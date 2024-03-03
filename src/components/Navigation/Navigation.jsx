import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="flex gap-3">
    <NavLink
      to="/"
      className="hover:text-green-400 px-4 py-3 rounded-md text-sm font-medium"
    >
      Shop
    </NavLink>
    <NavLink
      to="/cart"
      className="hover:text-green-400 px-4 py-3 rounded-md text-sm font-medium"
    >
      Shopping Cart
    </NavLink>
  </nav>
);

export default Navigation;
