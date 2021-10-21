import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import banner from '../image/banner.bmp'
import useAuth from '../Hooks/useAuth';
const Header = () => {
    const {user,logOut } = useAuth();
    return (
        <div>
            <div className="d-sm-flex justify-content-evenly align-items-sm-center container-fluid">
            <img src={banner} className="" alt="" />
            <div className="d-flex justify-content-between align-items-center p-5">
            <div className="d-flex me-5 " >
                <p><Link className="link-style" to="/home">HOME</Link></p>
                <p><Link className="link-style" to="/allservices">SERVICES</Link></p>
                <p><Link className="link-style" to="/doctors">DOCTORS</Link></p>
                <p><Link className="link-style" to="/contact">CONTACT</Link></p>
                <p><Link className="link-style" to="/about">ABOUT</Link></p>
            </div>
            <div className="ps-1">
                <h5 className="mb-3">{user.displayName}</h5>
                <p><Link to="/register" className="link-style my-2">REGISTER</Link></p>
                <div>
        {user?.email &&<button onClick={logOut} type="submit" className="link-style bg-danger">Logout</button>}
        </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Header;