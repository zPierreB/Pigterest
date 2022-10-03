import React from "react";

const PictureList = ({ pictures }) => {
    
    return(
        <div className="picturesContainer">
            {pictures.map((picture) => (
                <div className="onePicContainer">
                    <img key={picture.id} className="onePic" src={picture.link} alt={picture.alt}/>
                </div>
            ))}
        </div>
    )
}

export default PictureList;