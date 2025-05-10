import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src="/public/logo.jpg" alt="" />
                </div>
                <div className="name">
                    <h1>Nasib <span> Karimzade </span> </h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar