import React from "react";

function ImageCard(props) {
  const { descriptiom, urls } = props.picture;
  return (
    <div>
      <img src={urls.regular} alt={descriptiom} />
    </div>
  );
}

export default ImageCard;
