import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CustomModal = ({ id, setShowPopup }) => {
  const photos = useSelector((state) => state.imageReducer.photos);
  const isDarkMode = useSelector((state) => state.imageReducer.isDarkMode)

  // Find the photo with the matching id
  const photo = photos.find((ele) => ele.id === id);

  console.log("photo", photo);

  const handleDownload = async () => {
    try {
      const response = await fetch(photo.urls.full);
      const blob = await response.blob();
  
      const url = window.URL.createObjectURL(blob);
  
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = `photo_${photo.id}.jpg`; // You can customize the filename
  
      // Trigger the download
      link.click();
  
      // Clean up
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
      // Handle error accordingly
    }
  };
  
  return (
    <>

      <div className={`container-fluid`}>

        <ModalBackGround className="modalBackground row">
          {/* modal dark mode */}
          <ModalContainer className={`modalContainer col-11  col-sm-11 col-lg-11 col-xl-11 mt-2 ${isDarkMode ? 'dark-mode' : 'light-mode'}`} style={{width: '90%', height: 'auto' }}>
            <CloseButton className="close-btn" onClick={() => setShowPopup(false)}>
              <i class={`fa-solid fa-xmark  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}></i>
            </CloseButton>


              {/* modal dark mode */}
              <div className={`d-flex p-2  justify-content-around justify-content-center align-items-center  ${isDarkMode ? 'dark-mode' : 'light-mode'}`} style={{ width: '100%', height: '5rem' }}>
                  <div className="d-flex  align-items-center " style={{ width: '50%', height: '100%' }}>
                    <img
                      src={photo.user.profile_image.small}
                      alt={photo.user.name}
                      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />

                    <div className="d-flex flex-column mx-2 ">
                      <h6 className="m-0">{photo.user.name}</h6>
                      <span>@{photo.user.username}</span>
                    </div>
                  

                  </div>
           
                 
                  <p><i class="fa-regular fa-thumbs-up me-2"></i>{photo.likes}</p>

                </div>
            {photo ? (
              <div className=" d-flex justify-content-center align-items-center flex-column "style={{overflowx: 'auto',width: '90%', height: 'auto' }}>
              

                <img src={photo.urls.regular} alt={photo.alt_description} style={{  width: '100%', height: 'auto' }} />
               
              </div>
            ) : (
              <p>Photo not found.</p>
            )}
              <div className={`d-flex p-2  justify-content-around justify-content-center align-items-center  ${isDarkMode ? 'dark-mode' : 'light-mode'}`} style={{ width: '100%', height: '5rem' }}>
                  <div className="d-flex  align-items-center " style={{ width: '50%', height: '100%' }}>
                  <buuton onClick={handleDownload} className='btn btn-success' style={{fontSize:'0.8rem', width:'100%'}}>  Download</buuton>
                  </div>
   
      

                </div>
          </ModalContainer>
        </ModalBackGround>
      </div>

    </>
  );
};

export default CustomModal;

const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  opacity: 1;
    flex-wrap: wrap;
  overflow-y: auto;
`;

const ModalContainer = styled.div`
  box-shadow: 0px 0px 15px #000;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const CloseButton = styled.button`
  position: relative;
  top: 0;
  left: 47%;
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  color: #000;
`;