import React, { useState, useRef,useEffect } from 'react';
import './index.css';
import Cart from '../shoppingCart/cart';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  const handleCartClick = (event) => {
    event.stopPropagation();
    setIsCartOpen(!isCartOpen);
    setIsModalOpen(false);
  };


  const getModalPosition = (menuRef) => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      return {
     
      };
    }
    return {};
  };

  return (
    <div className='parent-header' >

      <div className="header">
        {isModalOpen ? (
          <div className="close-menu" onClick={handleCloseModal}>
            <img src="/close-menu.png" alt="Close Menu" />
          </div>
        ) : (
          <div className="menu" onClick={handleMenuClick} ref={menuRef}>
            <img src="/menu.png" alt="Menu" />
          </div>
        )}

        <div className="gabar">
          <img src="/gabar.png" alt="Gabar" style={{ maxWidth: '100%', marginRight: '10%' }} />
        </div>
        <div style={{position:"relative"}}>
         <span className="itemCount">
           10
           </span> 
        <img src="/Vector.png" style={{height:20,width:20}}  onClick={handleCartClick}/>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" style={getModalPosition(menuRef)}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
            </span>
            <div className="custom-div" style={{ width: '256px', height: '101px', top: '0px', left: '35px', position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'rgba(0, 0, 0, 1)', fontWeight: 300, fontSize: '16px', fontFamily: 'Univers, sans-serif' }}>
          <p>Gabar for Myanmar</p>
          <div style={{ width: '256px', height: '1px', backgroundColor: 'rgba(216, 216, 216, 1)', margin: '-2px 0' }}></div>
          <p>Stores</p>
          <div style={{ width: '256px', height: '1px', backgroundColor: 'rgba(216, 216, 216, 1)', margin: '-2px 0' }}></div>
          <p>About us</p>
          <div style={{ width: '256px', height: '1px', backgroundColor: 'rgba(216, 216, 216, 1)', margin: '-2px 0' }}></div>
          <p>
            <img src="/instagram.png" alt="Instagram" style={{ marginRight: '35px' }} />
            <img src="/tiktok.png" alt="TikTok" />
          </p>
      </div>
      </div>
          </div>
        </div>
      )}
 { isCartOpen && <Cart />}
    </div>
  );
};


export default Header;
