import React, { Component } from "react";
import { useState } from "react";
import "./styles/sideBar.css";
import { dummyCategories } from "./../dummyData/dummyCategories";
import Home from "../pages/home/home";
import axios from "axios";

class SideBar extends Component {
  state = {};

  render() {
    return (
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white sideBar"
        style={{ position: "fixed", top: "71px", width: "200px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          style={{ margin: "0 auto", fontSize: "22px" }}
        >
          {/* <svg className="bi me-2" width="40" height="32"></svg> */}
          <span>Categories</span>
        </a>
        <hr />
        <ul
          className="nav nav-pills flex-column mb-auto "
          style={{ textAlign: "left" }}
        >
         

          {this.props.categories.map((category) => (
            <li key={category.id}>
              <a
                href="#"
                className={`nav-link text-white ${
                  category.id === this.props.selectedCategoryId
                    ? "active selected"
                    : ""
                }`}
                onClick={() => {
                  this.props.onChangeCategoryId(category.id);
                  // this.props.onChangeCategoryName(c.name);
                }}
              >
                {/* <svg className="bi me-2" width="16" height="16"></svg> */}
                {category.name}
              </a>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    );
  }
}

export default SideBar;

// const SideBar = () => {
//   const [selectedCategoryId, setselectedCategoryId] = useState(
//     dummyCategories[0].id
//   );
//   const [selectedCategoryName, setselectedCategoryName] = useState(
//     dummyCategories[0].name
//   );

//   return (

//   );
// };

// export default SideBar;

// class SideBar extends Component {
//   state = {
//     selectedCategoryId: dummyCategories[0].id,
//   };

//   handleClick(id) {
//     this.setState({
//       selectedCategoryId: id,
//     });
//   }

//   render() {
//     return (
//       <div className="d-flex flex-column flex-shrink-0 p-3 text-white sideBar">
//         <a
//           href="/"
//           className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
//         >
//           <svg className="bi me-2" width="40" height="32"></svg>
//           <span className="fs-4">Categories</span>
//         </a>
//         <hr />
//         <ul
//           className="nav nav-pills flex-column mb-auto "
//           style={{ textAlign: "left" }}
//         >
//           {dummyCategories.map((c) => (
//             <li key={c.id}>
//               <a
//                 href="#"
//                 className={
//                   c.id === this.state.selectedCategoryId
//                     ? "nav-link text-white active selected"
//                     : "nav-link text-white"
//                 }
//                 onClick={() => this.handleClick(c.id)}
//               >
//                 <svg className="bi me-2" width="16" height="16"></svg>
//                 {c.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <hr />
//         <div className="dropdown">
//           <a
//             href="#"
//             className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
//             id="dropdownUser1"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <img
//               src="https://github.com/mdo.png"
//               alt=""
//               width="32"
//               height="32"
//               className="rounded-circle me-2"
//             />
//             <strong>mdo</strong>
//           </a>
//           <ul
//             className="dropdown-menu dropdown-menu-dark text-small shadow"
//             aria-labelledby="dropdownUser1"
//           >
//             <li>
//               <a className="dropdown-item" href="#">
//                 New project...
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Settings
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Profile
//               </a>
//             </li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Sign out
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default SideBar;
