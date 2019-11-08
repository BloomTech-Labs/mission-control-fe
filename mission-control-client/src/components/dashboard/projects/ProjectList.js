// import React, { useState, useEffect } from "react";
// import SearchIcon from "@material-ui/icons/Search";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import Project from "./Project";
// import { connect } from "react-redux";
// import { setActiveProject } from '../../../actions/activeProjectActions';

// const ProjectList = props => {

//   console.log(props)

//   useEffect(() => {
//     setFiltered({ projects: props.projects });

//     if(filtered.projects.length > 0) {
//       props.setActiveProject(filtered.projects[0])
//     } else {
//       props.setActiveProject(props.projects[0])
//     }
//   }, [props.projects]);

//   const [filtered, setFiltered] = useState({ projects: [] });


//   const setProjectHandler = el => {
//     props.setActiveProject(el);
//   };

//   const handleChange = e => {
//     const projects = props.projects;
//     const re = /^[a-z0-9\s]+$/i;

//     if (e.target.value !== "" && re.test(e.target.value) && projects.length > 0) {
//       setFiltered({
//         projects: projects.filter(item => {
//           return (
//             item.name
//               .toLowerCase()
//               .search(e.target.value.toLowerCase()) !== -1
//           );
//         })
//       });
//     } else if (!re.test(e.target.value) && e.target.value !== "") {
//       setFiltered({ projects: [] });
//     } else {
//       setFiltered({ projects: props.projects });
//     }
//   };

//   return (
//     <div className="product-list-container">
//       <div className="product-list-header">
//         <p className="product-list-title">Projects</p>
//         <div className="add-product-icon">
//           <AddCircleOutlineIcon fontSize="large" />
//         </div>
//       </div>
//       <span className="admin-product-search-wrapper">
//         <SearchIcon fontSize="large" className="admin-product-search-icon" />
//         <input
//           className="admin-product-search"
//           placeholder="Search here"
//           onChange={handleChange}
//         />
//       </span>
//       <div className="products-scroll-container">
//         {filtered.projects.length &&
//           filtered.projects.map((el, i) => (
//             <Project
//               active={props.activeProjectStore.active}
//               setActiveProduct={setProjectHandler}
//               key={i}
//               el={el}
//               i={el.id}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     activeProjectStore: state.activeProjecStore
//   }
// }

// export default connect(mapStateToProps, { setActiveProject })(ProjectList);
