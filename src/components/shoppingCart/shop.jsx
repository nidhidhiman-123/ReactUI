import React, { useEffect, useState } from "react";
import "./styles.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutline from '@mui/icons-material/DeleteOutline';
const ShoppingCart = ({ name, image, price, discount, count,handleCartItems,id }) => {
  const [quantity, setQuantity] = useState(1);
  const [counter,setCounter]=useState('')
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const total = price * quantity;
  const discountedTotal = total * (1 - discount / 100);
  const percentage = (discount / total) * 100;
  useEffect(()=>{
    setCounter(count)
  },[])
  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="root-container">
        <div className="product-info">
          <span className="product-name">{name}</span>
          <div className="inner-container-price">
          <span className="product-name">${discount?discount:total}</span>
         {discount!=0 && <div className="discount-price">
          <span className="product-name">${total}</span>
          <div className="gradient-box">
                  <span className="save-per">Save {percentage}%</span>
                </div>
          </div>}
          </div>
          {/* <div>
            {discount != 0 && (
              <span className="product-name-discount">
                ${discount.toFixed(2)}
              </span>
            )}
            <div className="total-discount">
              <span className="product-name">
                ${discount != 0 ? discount : total.toFixed(2)}
              </span>
              {discount != 0 && (
                <div className="gradient-box">
                  <span className="save-per">Save {percentage}%</span>
                </div>
              )}
            </div>
          </div> */}
        </div>
        <div>

        <div className="main-counter-block">
            
        <div className="counter-block">
          <div className="icon-holder">

          <RemoveIcon fontSize="1rem" onClick={()=>handleCartItems(id,'sub')}/>
          </div>

          <input className="inner-counter-ele" value={counter} onChange={(e)=>setCounter(e.target.value)} inputMode="numeric"/>
          {/* <span className="inner-counter-ele">{count}</span> */}
          <div className="icon-holder2">

          <AddIcon fontSize="1rem" onClick={()=>handleCartItems(id,'add')}/>
          </div>
        </div>
        <img src="/Vector.svg" style={{height:15,width:15,paddingLeft:10}} onClick={()=>handleCartItems(id)}/>
        {/* <DeleteOutline fontSize="small" htmlColor="gray" style={{paddingLeft:10}}/> */}
        </div>
        <div style={{height:10}}/>
        {id==4 && (
                // <div className="gradient-box-later">
                  <span className="save-per-later">Order for later</span>
                // </div>
              )}
           
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
