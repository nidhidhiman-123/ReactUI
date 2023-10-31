import React, { useState,useEffect } from "react";
import "./index.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Header from "../Header/header"
const Products = ({}) => {
  const image = ["/Mask2.png", "/productImg.png", "/gelcream.png","/Mask1.png"];
  const [activeImage, setActiveImage] = useState(image[0]);
  const [counter, setCounter] = useState(0);
  const [isSubParentVisible, setIsSubParentVisible] = useState(true);
  const [cart, setCart] = useState([]);
  const handleOnChange = (val) => {
    if (val) {
      setCounter((e) => e + 1);
    } else {
      if (counter != 0) {
        setCounter((e) => e - 1);
      }
    }
  };
  const numReg=/^[0-9]*$/
  const handleChange=(e)=>{
    if(numReg.test(e.target.value)){
      if(e.target.value>0){

        if(e.target.value<100)
        {
          setCounter(parseInt(e.target.value))
        }
      }
    }
  }
  const handleAddToCart = () => {
    setIsSubParentVisible(false);
    console.log("isSubParentVisible:", isSubParentVisible);
  };

  return (
    <>
    <Header/>
    <div className="parent-container-dummy">
      {/* <div className="sub-parent-container"> */}
   
       <div className={`sub-parent-container ${isSubParentVisible ? "" : "hidden"}`} style={{ display: isSubParentVisible ? "block" : "none" }}>

        <div className="item-main-container">
          <div className="series-image">
            {image.map((el, index) => {
              return (
                <img
                  src={el}
                  className="product_image"
                  onClick={() => setActiveImage(el)}
                  key={index} 
                />
              );
            })}
          </div>
          <div className="zoomed-image">
            <img src={activeImage} className="main-image" />
          </div>
          <div className="other-details">
            <span className="product-heading">Lorem Ipsum Dolor</span>
            <span className="product-sub-heading">
              by ordering for later help us reduce waste
            </span>
            <span className="product-sub-heading-test">Ingredients</span>
            <p className="product-description">
              Lorem Ipsum Dolor by ordering for later to help us reduce waste
              Ingredients Sit amet consectetur. Urna est nunc a arcu eros fusce
              maecenas ut sed. Viverra ut diam turpis purus maecenas. Libero
              purus consectetur diam dolor rhoncus. Mauris id sit donec facilisi
              integer. Morbi morbi incondimentum nec turpis sit condimentum
              suspendisse tincidunt. Tempor a pretium magna eleifend nam tempus
              quam. Nisl lorem ut pulvinar posuere aliquet amet odio. Est mi sit
              consequat cursus. Cras eros in cras aliquam. Adipiscing aliquet
              vehicula nulla nulla adipiscing leo eget neque. Porttitor accumsan
              feugiat pellentesque tristique. Amet integer eu netus vestibulum
              tempor diam. Nunc donec amet nisi sed sem.Morbi morbi in
              condimentum nec turpis sit condimentum suspendisse tincidunt.
              Tempor a pretium magna eleifend nam tempus quam. Nisl lorem ut
              pulvinar posuere aliquet amet odio. Est mi sit consequat cursus.
              Cras eros in cras aliquam. Adipiscing aliquet vehicula nulla nulla
              adipiscing leo eget neque. Porttitor accumsan feugiat pellentesque
              tristique. Est mi sit consequat cursus. Cras eros in cras aliquam.
              Adipiscing aliquet vehicula nulla nulla adipiscing leo eget neque.
              Porttitor accumsan feugiat pellentesque tristique. Est mi sit
              consequat cursus. Cras eros in cras aliquam.
            </p>
            <span className="stroked-text">$150</span>
            <div className="bottom-items">
              <span className="actual-price-text">$150</span>
              <span className="grad-container">Save 15%</span>
            </div>
            <div className="bottom-btn-container">
              <div className="counter-block">
                <div className="icon-holder">
                  <RemoveIcon
                    fontSize="1rem"
                    onClick={()=>handleOnChange(false)}
                  />
                </div>

                <input
                  className="inner-counter-ele"
                  value={counter}
                  onChange={handleChange}
                  inputMode="numeric"
                />
                {/* <span className="inner-counter-ele">
                  {counter}
                </span> */}
                <div className="icon-holder2">
                  <AddIcon
                    fontSize="1rem"
                    onClick={()=>handleOnChange(true)}
                  />
                </div>
              </div>
              <button className="add-cart-btn"  onClick={handleAddToCart}>
                <span className="btn-txt-cart">Add to bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Products;
