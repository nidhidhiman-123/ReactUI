// import React, { useState, useEffect } from 'react';
// import './index.css';

// const Products = ({ initialImage }) => {
//   const [isModalOpen, setIsModalOpen] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const imageSources = ["/productimg.png", "/Mask2.png", "/gelcream.png"];
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   useEffect(() => {
//     setIsModalOpen(true);
//   }, []);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleImageClick = (index) => {
//     setSelectedImageIndex(index);
//   };
// ;
//   return (
//     <div>
//       {isModalOpen && (
//         <div className="modal-container">
//         <div className="modal-content">
//         <div className="image-container">
//       {imageSources.map((imageSource, index) => (
//         <div
//           key={index}
//           className={`container ${selectedImageIndex === index ? 'selected-container' : ''}`}
//           onClick={() => handleImageClick(index)}
//         >
//           <img src={imageSource} alt={`Mask ${index + 1}`} className='demo' />
//         </div>
//       ))}
//        </div>
//       <div className="modal-container1">
//         <img src={imageSources[selectedImageIndex]} className='demo' alt={`Mask ${selectedImageIndex + 1}`} />
//       </div>
   
//             <div className="modal-container2">
              
//               <div className="modal-content2">
//                 <p className="text">
//                   Lorem Ipsum Dolor
//                   <span className="line"></span>   </p>
//                   <br />
//                   <div className="text2div">
//                     <p className="text3">
//                       $129.99
//                       <img src="/rectangle.png" alt="Price Tag" className="price-tag-image" />
//                     </p>
//                   </div>
//                   <br />
//                   <p className="text4">
//                     $99.99
//                   </p>
//                   <br />
//                   <p className="text5">
//                     by ordering for later to help us reduce waste
//                   </p>
//                   <br />
//                   <p className="text6">
//                     Ingredients
//                   </p>
//                   <br />
//                   <p className="text7">
//                     Sit amet consectetur. Urna est nunc a arcu eros fusce maecenas ut sed.Viverra ut diam turpis purus maecenas. Libero purus consectetur diam dolor rhoncus. Mauris id sit donec facilisi integer. Morbi morbi incondimentum nec turpis sit condimentum suspendisse tincidunt. Tempor a pretium magna eleifend nam tempus quam. Nisl lorem ut pulvinar posuere aliquet amet odio.
//                     <br />Est mi sit consequat cursus. Cras eros in cras aliquam. Adipiscing aliquet vehicula nulla nulla adipiscing leo eget neque. Porttitor accumsan feugiat pellentesque tristique. Amet integer eu netus vestibulum tempor diam. Nunc donec amet nisi sed sem.Morbi morbi in condimentum nec turpis sit condimentum suspendisse tincidunt. Tempor a pretium magna eleifend nam tempus quam. Nisl lorem ut pulvinar posuere aliquet amet odio.
//                     <br />Est mi sit consequat cursus. Cras eros in cras aliquam. Adipiscing aliquet vehicula nulla nulla adipiscing leo eget neque. Porttitor accumsan feugiat pellentesque tristique.
//                     <br />Est mi sit consequat cursus. Cras eros in cras aliquam. Adipiscing aliquet vehicula nulla nulla adipiscing leo eget neque. Porttitor accumsan feugiat pellentesque tristique. Est mi sit consequat cursus. Cras eros in cras aliquam.
//                     <br />Est mi sit consequat cursus. Cras eros in cras aliquam. Adipiscing aliquet vehicula nulla nulla adipiscing leo eget neque. Porttitor accumsan feugiat pellentesque tristique. Est mi sit consequat cursus. Cras eros in cras aliquam.
//                     <br />Est mi sit consequat cursus. Cras eros in cras aliquam. Adipiscing aliquet vehicula nulla nulla adipiscing leo eget neque. Porttitor accumsan feugiat pellentesque tristique. Est mi sit consequat cursus. Cras eros in cras aliquam.
                  
//                   </p>
                 
            
//               </div>
//             </div>
          
//             <div className="modal-container3">
//             <div className="quantity-controls">
//   <span  onClick={incrementQuantity}>+</span>
//   <span>{quantity}</span>
//   <span  onClick={decrementQuantity}>-</span>
// </div>
//             </div>
//             <div className="bottom-left-container">

//               <button className="custom-button">ADD TO BAG</button>

//             </div>
//             <div className="close-icon" onClick={closeModal}>
//               <img src="/close-icon.png" alt="Close" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;
