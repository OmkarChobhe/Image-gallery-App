import { useSelector } from "react-redux";
import CardSkeleton from "./CardSkeleton.jsx";
import { useState } from "react";

function ImageCard({ photo }) {
  const {isLoading } = useSelector((state) => state.imageReducer);


  return (
    <>
      { isLoading ? (
        <div className="col-md-4 col-sm-6 col-lg-3">
          <CardSkeleton />
        </div>
      ) : (
        <>
          <div
            className="image-card-container"
            style={{ cursor: "pointer" }}
          >
            <img
              className="w-100 rounded bx-shadow1"
              src={photo?.urls?.regular}
              alt={photo?.alt_description}
              style={{ height: '20rem' }}
            />
          </div>
        </>
      )}
    </>
  );
}

export default ImageCard;
