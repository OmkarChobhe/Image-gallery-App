
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { setSearchQuery, fetchPhotos, SetIsDarkMode } from "../redux/reducer/imageReducer";

function Navbar() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.imageReducer.searchQuery);
  const isDarkMode = useSelector((state) => state.imageReducer.isDarkMode)

  const handleDarkMode = () => {
    dispatch(SetIsDarkMode(!isDarkMode)); // Toggle the dark mode state
  }

// handling serach as per input 
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchPhotos(searchQuery));

  }

// after clicking enter it can serach
  const handleEnterSearch = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      dispatch(fetchPhotos(searchQuery));

    }
  }

  return (
    // nabar darkmode toggle
//     <nav className={`navbar navbar-expand-lg px-4 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       <div class="container-fluid ">
//         <a class="navbar-brand me-5" href="#"><h5>Image-Gallary</h5></a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="" ><i class="fa fa-bars" aria-hidden="true"></i></span>
//         </button>
//         <div class="collapse navbar-collapse " id="navbarSupportedContent">
//           {/* input form */}
//           {/* <form class="d-flex me-5">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => dispatch(setSearchQuery(e.target.value))}
//               style={{ width: '10rem' }}
//               class="form-control me-2" placeholder="Search" aria-label="Search" />
//             <button
//               onClick={handleSearch}
//               onKeyDown={handleEnterSearch}
//               class="btn btn-success" ><i class="fa-solid fa-magnifying-glass"></i></button>
//           </form> */}
//             {/* input form  end*/}
// {/* Navbar - ul llist */}
          
//             {/* change icon after toggle */}
           
//               <i
//                 className={`fa-solid   ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}
//                 onClick={handleDarkMode}

//               ></i>
         
       
// {/* Navbar - ul llist end */}
//         </div>
//       </div>
//     </nav>




<nav className="navbar navbar-expand border-bottom py-2" data-type="fixednav">
  <div className="container">
    <a className="navbar-brand img-fluid" href="#">
     <u className="text-primary" > <h5 className="text-danger underline"><span className="text-primary fs-3">I</span>mage<span className="text-primary fs-3">G</span>allary</h5></u>
    </a>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    
       
          <i
                className={`fa-solid   ${isDarkMode ? 'fa-sun' : 'fa-moon'} `}
                onClick={handleDarkMode}
                style={{cursor:'pointer'}}
              > {` ${isDarkMode ?  'Light' : 'Dark'}`}</i>
     
    </div>
  </div>
</nav>


  );
}

export default Navbar;
