// import React from "react";
// import "./Cart.css";
// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";
// // import { NavLink } from "react-router-dom";
// const CartWork = (props) => {

//   const dispatch=useDispatch()
//   // dispatch action
// const handleAddItem=()=>{
// //   dispatch(addItem(items))
// // console.log(items);

// const itemToAdd = {
//   imgsrc: props.imgsrc,
//   title: props.title,
//   price: props.price,
// };
// dispatch(addItem(itemToAdd));

// }
//    return (
//     <div className="project-card">
//       <div className="product">
//         <img src={props.imgsrc} alt="" />
//         <h2 className="project-title">{props.title}</h2>  
//         <div className="pro-derails">
//           <p>{props.price}</p>
//           <div className="pro-btns">
//             {/* <NavLink to={props.view} className="btn1">
//               Add to Cart
//             </NavLink> */}
//             <button to={props.view} className="btn1" onClick={()=>handleAddItem()}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartWork;







import React from "react";
import "./Cart.css";
  import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CartWork = (props) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(props.items)); // Dispatch 'addItem' with 'props.items' as payload
  };

  return (
    <div className="project-card">
      <div className="product">
        <img src={props.items.imgsrc1} alt="" />
        <h2 className="project-title">{props.items.title}</h2>
        <div className="pro-derails">
          <p>{props.items.price}</p>
          <div className="pro-btns">
            <button className="btn1" onClick={handleAddItem}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWork;
