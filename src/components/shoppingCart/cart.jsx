import React, { useState,useEffect } from "react";
import { useStore } from "../constant";
import ShoppingCart from "./shop";
import "./styles.css";
const Cart = () => {
  const [show, setShow] = useState(true);
  const {showCart,handleShowCart,increase}=useStore(state=>state)
  const [products, setProducts] = useState([
    {
      name: "Testing Product",
      image: "./ai3.jpg",
      discountedPrice: 150,
      price: 200,
      count: 1,
      id: 1,
    },
    {
      name: "Testing Product 2",
      image: "./ai3.jpg",
      discountedPrice: 0,
      price: 200,
      count: 1,
      id: 2,
    },
    {
      name: "Testing Product 3",
      image: "./ai3.jpg",
      discountedPrice: 0,
      price: 200,
      count: 1,
      id: 3,
    },
    {
      name: "Testing Product 4",
      image: "./ai3.jpg",
      discountedPrice: 50,
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
        console.log("testing=-==========",val)
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
    // increase(products.length)
    let count=0
    products.forEach((el)=>{
      count+=el.count
    })
    increase(count)
  }, [products])
  const handleCountChange=(id,val)=>{
   let c= parseInt(val)
    setProducts([
      ...products.map((el, index) => {
        if (el.id == id)
          return { ...el, count:c};
        else return el;
      }),
    ]);
  } 
  return (
    <>   
        <div className="main-containerss">
          <div className="cart-header">
            <span className="cart-txt">Your Cart</span>
            <span className="cart-close" onClick={() =>handleShowCart(!showCart)}>
              Close
            </span>
          </div>
          <div
            className="scroll-container"
          >
            {[...products].map((product, index) => (
              <ShoppingCart
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
                discount={product.discountedPrice}
                count={product.count}
                handleCartItems={handleCartItems}
                id={product.id}
                handleCountChange={handleCountChange}
              />
            ))}
          <div className="total-amount-block">
            <div className="total-amount">
              <span className="subtotal-amount">Savings</span>
              <span className="subtotal-amount">- $150</span>
            </div>
            <div className="total-amount">
              <span className="subtotal-amount">Subtotal</span>
              <span className="subtotal-amount">$150</span>
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
            <div className="fake-border"/>
            <span className="disclaimer-txt">
              Est mi sit consequat cursus. Cras eros in cras aliquam. Adipiscing
              aliquet vehicula nulla nulla adipiscing leo eget neque. Porttitor
              accumsan feugiat pellentesque tristique. Est mi sit consequat
              cursus. Cras eros in cras aliquam.
            </span>
            <div  className="fake-border"/>
          </div>
          </div>
        </div>
   
    </>
  );
};

export default Cart;
