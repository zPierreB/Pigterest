import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import AddPicture from "./components/Pictures/AddPictures.jsx";
import Login from "./components/Profil/Login.jsx";
import PictureAdmin from "./components/Admin/PictureAdmin";

function App() {
  	return (
    	<div className="">
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/add" element={<AddPicture />} />
					<Route path="/login" element={<Login />} />
					<Route path="admin" element={<PictureAdmin />} />
				</Routes>
			</Router>
    	</div>
  	);
}

export default App;
