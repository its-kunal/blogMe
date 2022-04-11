import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../authContext'

export default function Navbar() {
    // const SearchKeyListener = new KeyboardEvent("keyup", { keyCode: 13 });
    const { user, loading } = useAuth()
    const [active, setActive] = useState(false)


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand ms-lg-4" href="#">Blog<strong className='text-success'>Me <i className="bi bi-chat-dots-fill"></i></strong></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Navs */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-2 fs-5">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-hash"></i> Tags</a>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-file-text"></i> Posts
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"><i className="bi bi-file-earmark-break-fill"></i> Your Posts</a></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-wallet-fill"></i> Your Credits</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-graph-up-arrow"></i> Analytics</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Actions */}
                    <ul className="navbar-nav ms-lg-auto me-1 mb-2 mb-lg-0 p-0 fs-5">
                        <li className="nav-item">
                            <Link className='nav-link' to="">{user ? <img src={user.photoURL} height="30px" /> : <i className={`bi bi-person-circle ${user ? "text-success" : ""}`}  ></i>}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to=""><i className="bi bi-cloud-sun-fill"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="">Create Post <i className="bi bi-file-earmark-plus-fill"></i></Link>
                        </li>
                    </ul>
                    <form className="d-flex me-lg-3 ms-lg-2">
                        <input className="form-control me-2" type="search" placeholder="Search for Blogs, Users" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
                    </form>
                </div>
            </div>
        </nav >
    )
}
