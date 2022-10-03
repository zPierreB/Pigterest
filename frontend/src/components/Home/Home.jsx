import React, { useState }from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from '../Header/Header.jsx';
import PictureList from '../Pictures/PictureList.jsx';
import "./Home.css";

const Home = () => {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        getPictures();
    }, []);

    const getPictures = async() => {
        const response = await axios.get('http://localhost:5000/pictures');
        setPictures(response.data);
    }

    return (
        <div>
            <Header />
            <PictureList pictures={ pictures } />
        </div>
    )
}

export default Home;