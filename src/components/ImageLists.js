import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

function ImageLists(props) {
  const images = props.pictureArray.map((pic) => {
    return <ImageCard key={pic.id} picture={pic} />;
  });
  return <div className="image-list"> {images}</div>;
}

export default ImageLists;

// import React, { Component } from "react";

// export class ImageLists extends Component {
//   images = () => {
//     console.log("hello");
//     // console.log(this.props.pictureArray);
//     this.props.pictureArray.map((pic) => {
//       console.log(pic.urls.regular);
//       return (
//         <div>
//           some body send helppp
//           <img src={pic.urls.regular} alt="" />
//         </div>
//       );
//     });
//   };

//   render() {
//     return (
//       <div>
//         Pic goes here{" "}
//         {this.props.pictureArray.map((pic) => {
//           console.log(pic.urls.regular);
//           return (
//             <div>
//               some body send helppp
//               <img src={pic.urls.regular} alt="" />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default ImageLists;
