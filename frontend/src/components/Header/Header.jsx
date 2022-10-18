import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <h2>Home Page</h2>
            <Link to="/add">Add Picture</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Header;