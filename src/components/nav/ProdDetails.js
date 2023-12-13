// import React, {props} from "react";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import QuantityButton from "./QuantityCounter";

// const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant, prodName }) => {
//     console.log(props.prodName)
//   return (
//     <section className="description">
//         <img src="https://m.media-amazon.com/images/I/71HYVk0lTJL._AC_SY500_.jpg"></img>
//       <p className="pre">sneaker company</p>
//       <h1>{props.prodName}</h1>
//       <p className="desc">
//         These low-profile sneakers are your perfect casual wear companion.
//         Featuring a durable rubber outer sole, they’ll withstand everything the
//         weather can offer
//       </p>
//       <div className="price">
//         <div className="main-tag">
//           <p>$125.00</p>
//         </div>
//         <s>$250.00</s>
//       </div>
//       <div className="buttons">
//         <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
//         <button
//           className="add-to-cart"
//           onClick={() => {
//             onSetOrderedQuant(onQuant);
//           }}
//         >
//           <AddShoppingCartIcon />
//           add to cart
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Description;