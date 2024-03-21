import React from 'react';
import CartWork from './CartWork';
import fetchApi from './CartData';
import "./Cart.css";

const Carts = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Product</h1>
      <div className="project-container">
        {fetchApi.map((val, ind) => (
          <CartWork
            key={ind}
            items={val} // Pass the entire 'val' object as 'items' prop
          />
        ))}
      </div>
    </div>
  );
};

export default Carts;



// import React from 'react';
// import CartWork from './CartWork';
// import fetchApi from './CartData';
// import "./Cart.css";

// const Carts = () => {
//   return (
//     <div className="work-container">
//       <h1 className="project-heading">Product</h1>
//       <div className="project-container">
//         {fetchApi.map((val, ind) => {
//           return (
//             <CartWork
//               key={ind}
//               imgsrc={val.imgsrc1}
//               title={val.title}
//               price={val.price}
//               items={val} // Pass the entire 'val' object as 'items' prop
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Carts;
