import React, { useState,useEffect } from "react";
import "./index.css";
import Header from "../Header/header";
import { useNavigate } from "react-router-dom";
const Form1 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
    };

    if (formData.name.trim() === "") {
      newErrors.name = "Please enter your name.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
      setFormData({ name: "", email: "" });
      navigate("/products");
    }
   
  };

  const handleCloseIconClick = (e) => {
    e.stopPropagation();
    setShowPopup(false);
    navigate("/products");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

 

  return (
    <>
<Header showPopup={showPopup}/>
      <div className="parent-class">
        {showPopup && (
          <div className="popup-container">
            <div className="close-icon" onClick={handleCloseIconClick}>
              <img className="close-img" src="/close-icon.png" alt="Close" />
            </div>
            <div className="headertext">
              <span className="text1">
                LIKE WHAT YOU SEE & WANT TO MEET US IN THE PHYSICAL WORLD?
              </span>
              <span className="text2">
                Join our community list for first access to more new drops &
                events
              </span>
            </div>
            <div className="input-container">

              <div className="sub-parent-input">
              <input
                className="input1"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleInputChange}
              />
              <span className="error-message">{errors.name}</span>
               </div> 
               <div className="sub-parent-input input-sub">
              <input
                className="input1"
                type="text"
                id="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleInputChange}
              />
              <span className="error-message">{errors.email}</span>
                </div> 

              <button
                style={{ marginTop: "5%" }}
                className="submitbutton"
                type="submit"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
           
              </div>
        )}
      </div>
    </>
  );
};

export default Form1;