import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPicture = () => {
    const [alt, setAlt] = useState('');
    const [link, setLink] = useState('');
    // const [createdAt, setCreatedAt] = useState('');
    // const [updatedAt, setUpdatedAt] = useState('');
    const navigate = useNavigate();

    const savePicture = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/pictures', {
            alt: alt,
            link: link
        });
        navigate.push("/");
    }

    return(
        <div>
            <form onSubmit={ savePicture }>
                <div>
                    <label className="label">Alt</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Alt"
                        value={ alt }
                        onChange={(e) => setAlt(e.target.value)}
                    />
                </div>

                <div>
                    <label className="label">Link</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Link"
                        value={ link }
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>

                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddPicture;