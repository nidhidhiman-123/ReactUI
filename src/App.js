import "./index.css";

import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Products from "./components/Products/products";
import Form1 from "./components/form/form";
import Cart from "./components/shoppingCart/cart";
import Header from "./components/Header/header";
import LandingPage from "./components/LandingPage/landingPage";
import Modal from "./components/ExploreModal/modal";




function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/modal" element={<Modal/>} />
            <Route exact path="/header" element={<Header/>} />
            <Route exact path="/form" element={<Form1/>} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


