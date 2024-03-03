import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <NavLink to="/">Главная</NavLink>
    <NavLink to="/cart">Корзина</NavLink>
  </nav>
);

export default Navigation;
