import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../redux/reducer/imageReducer";
import ImageCard from "../component/ImageCard";
import CustomModal from "../component/CustomModal";
import Loader from "../component/Loader";




function Home() {
  const dispatch = useDispatch();
  const { photos, isLoading, error, filteredPhotos } = useSelector((state) => state.imageReducer);
  const isDarkMode = useSelector((state)=> state.imageReducer.isDarkMode )

  const [id, setId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // console.log('photos', photos);

  useEffect(() => {
  setTimeout(()=>{
    dispatch(fetchPhotos());
  }, 3000)
      
   
  }, [dispatch]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  

  return (
    <>
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar />
      <Search />
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      {isLoading  ? (
        <div className="d-flex justify-content-center align-items-center" style={{height:'50vh', width:'100vw'}}>
       <Loader/>
       </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="container-fluid mt-5 d-flex justify-content-center">
          <div className="row container-fluid d-flex">
            {photos.map((photo) => (
    
          <div
          onClick={() => {
            setId(photo.id);
            setShowPopup(true);
          }} key={photo.id} className="col-12 col-sm-12 col-lg-3 col-xl-3  rounded mb-2" >
             <ImageCard
             key={photo.id}
             photo={photo}
            
           />
           </div>
 
   
     
            ))}
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default Home;
