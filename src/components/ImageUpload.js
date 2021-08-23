import { useState } from "react";
import "./imageUpload.css";
import placeholder from "./placeholder.png"

const ImageUpload = () => {
    const [image, setImage] = useState(placeholder);
    const handleChange = (e) => {
        const newImage = e.target.files[0];
        setImage(URL.createObjectURL(newImage))
    }
    return(
        <div>
            <label 
            htmlFor="img"
            className="btn-text">Загрузить картинку</label>
            <input
            id="img"
            type="file"
            className="btn-upload"
            onChange={handleChange}/>
            <img
            className="upload-img"
            alt={"placeholder"}
            src={image}/>
        </div>
        
    )
}
export default ImageUpload;