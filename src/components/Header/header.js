import React, { useState, useRef } from "react";
import { useStore } from "../constant";
import "./index.css";
const Header = () => {
  const { count } = useStore((state) => state);
  const {
    handleShowMenu,
    showMenu,
    handleShowCart,
    showCart,
    exploreModal,
    handleItems,
  } = useStore((state) => state);
  return (
    <>
      <div className="header-containers">
        <div className="headerss">
          {showMenu ? (
            <img
              src="/close-menu.png"
              alt="Close Menu"
              className="logo-image-cross"
              onClick={() => handleShowMenu(false)}
            />
          ) : (
            <img
              src="/menu.png"
              alt="Close Menu"
              className="logo-image-cross"
              onClick={() => handleShowMenu(true)}
            />
          )}
          <img src="/gabar.png" alt="Gabar" className="logo-image" />
          <div
            style={{ position: "relative", opacity: !exploreModal ? 0 : 1 }}
            onClick={() => {
              if (exploreModal) {
                handleShowCart(!showCart);
                handleItems(false);
              }
            }}
          >
            <div className="itemCount">
              <span className="counter-number">{count}</span>
            </div>
            <img
              src="/Vector.png"
              style={{ height: 20, width: 20, opacity: !exploreModal ? 0 : 1 }}
            />
          </div>
        </div>
      </div>

    </>
  );
};
export default Header;
