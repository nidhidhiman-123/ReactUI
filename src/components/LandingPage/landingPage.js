import React, { useEffect, useState } from "react";
import "./styles.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const [val, setVal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVal((prevVal) => prevVal + 20);
      if (val >= 100) {
        clearTimeout(timer);
        navigate("/modal");
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [val, navigate]);
  
  return (
    <div className="landing-contain">
      <div className="testing">
        <img src="/logo.png" className="page-img" />
        <div className="bar-container">
          <ProgressBar
            completed={val}
            bgColor="#fff"
            baseBgColor="#000"
            borderRadius="0px"
            height="11px"
          />
          ;
        </div>
      </div>
    </div>
  );
}
