// src/components/NavigationTabs.js
import React from "react";
import { NavLink } from "react-router-dom";

const NavigationTabs = () => (
  <div>
    <NavLink to="/" exact>
      Главная
    </NavLink>
    <NavLink to="/cart">Корзина</NavLink>
    {/* Добавьте дополнительные ссылки по мере необходимости */}
  </div>
);

export default NavigationTabs;
