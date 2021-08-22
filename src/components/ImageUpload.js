import { useState } from "react";
import "./imageUpload.css";

const ImageUpload = () => {
    const [image, setImage] = useState("");
    const handleChange = () => {
        const newImage =e.target.files[0];
        setImage(URL.createObjectURL(newImage))
    }
    return(
        <div>
            <label 
            htmlFor="img"
            className="btn-text">Загрузить картинку</label>
            <input
            type="file"
            className="btn-upload"
            onChange={handleChange}/>
            <img
            alt=""
            src={image}/>
        </div>
        
    )
}
export default ImageUpload;