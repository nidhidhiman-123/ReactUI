import React, { useState,useEffect } from "react";
import { useStore } from "../constant/constant";
import Header from "../Header/header";
import ShoppingCart from "./shop";
import "./styles.css";
const Cart = () => {
  const {increase}=useStore(state=>state)
  const [show, setShow] = useState(true);
  const [products, setProducts] = useState([
    {
      name: "Testin Product",
      image: "./ai3.jpg",
      discountedPrice: 150,
      price: 200,
      count: 1,
      id: 1,
    },
    {
      name: "Testin Product 2",
      image: "./ai3.jpg",
      discountedPrice: 0,
      price: 200,
      count: 1,
      id: 2,
    },
    {
      name: "Testin Product 3",
      image: "./ai3.jpg",
      discountedPrice: 0,
      price: 200,
      count: 1,
      id: 3,
    },
    {
      name: "Testin Product 4",
      image: "./ai3.jpg",
      discountedPrice: 0,
      price: 200,
      count: 1,
      id: 4,
    },

    // Your initial product data goes here
  ]);

  const totalHeight = products.length * 120; // Adjust the height based on your product card height
  const handleCartItems = (id, val) => {
    let demo = products;
    if (!val) {
      demo = demo.filter((el, index) => {
        return el.id != id;
      });
      setProducts([...demo]);
    } else {
      if (val == "add") {
        setProducts([
          ...products.map((el, index) => {
            if (el.id == id) return { ...el, count: el.count + 1 };
            else return el;
          }),
        ]);
      } else {
        setProducts([
          ...products.map((el, index) => {
            if (el.id == id && el.count > 0)
              return { ...el, count: el.count - 1 };
            else return el;
          }),
        ]);
      }
    }
  };

  useEffect(() => {
    increase(products.length)
  }, [products])
  
  return (
    <>
    <Header/>
      {show && (
        <div className="main-containerss">
          <div className="cart-header">
            <span className="cart-txt">Your Cart</span>
            <span className="cart-close" onClick={() => setShow(false)}>
              Close
            </span>
          </div>
          <div
            style={{
              maxHeight: 550,
              overflowY: "auto",
            }}
          >
            {products.map((product, index) => (
              <ShoppingCart
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
                discount={product.discountedPrice}
                count={product.count}
                handleCartItems={handleCartItems}
                id={product.id}
              />
            ))}
          </div>
          <div className="total-amount-block">
            <div className="total-amount">
              <span>Savings</span>
              <span>$150</span>
            </div>
            <div className="total-amount">
              <span>Subtotal</span>
              <span>$150</span>
            </div>
          </div>
          <div className="btn-root-container">
            <div className="bottom-btn">
              <span className="sub-txt-date1">
                Delivery together by 2 November.
              </span>
              <span className="sub-txt-date">
                Please allow for delivery 2-3 days either side of selected date
              </span>
            </div>
            <div className="bottom-btn" style={{ backgroundColor: "#000" }}>
              <span className="checkout-txt">CHECKOUT</span>
            </div>
            <div style={{ height: 20 }} />
            <span className="disclaimer-txt">
              Est mi sit consequat cursus. Cras eros in cras aliquam. Adipiscing
              aliquet vehicula nulla nulla adipiscing leo eget neque. Porttitor
              accumsan feugiat pellentesque tristique. Est mi sit consequat
              cursus. Cras eros in cras aliquam.
            </span>
            <div style={{ height: 40 }} />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
