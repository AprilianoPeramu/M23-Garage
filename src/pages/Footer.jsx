import React from 'react'
import Logo from '../assets/logo.png'
import '../App.css'
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-3 mt-4 mb-4">
                            <h5 className=''><img src={Logo}/>M23</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, nesciunt.</p>
                            <a href='#'><FaFacebook className='icon'/></a>
                            <a href='#'><FaInstagram className='icon'/></a>
                            <a href='#'><FaGithub className='icon'/></a>
                        </div>
                        <div className="col-md-2">
                            <h5 className='text-center'>Products</h5>
                            <ul className='ms-0'>
                                <li><a href='#'>Parts</a></li>
                                <li><a href='#'>Services</a></li>
                                <li><a href='#'>Oils</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-4">
                            <h5 className='text-center'>Resources</h5>
                            <ul>
                                <li><a href='#'>Blog</a></li>
                                <li><a href='#'>Newsletter</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5 className='text-center mb-4'>Support</h5>
                            <ul>
                                <li><a href='#'>Help</a></li>
                                <li><a href='#'>Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5 className='text-center'>Company</h5>
                            <ul>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>carrers</a></li>
                                <li><a href='#'>Contact</a></li>
                            </ul>
                        </div>
                        <hr/>
                        <div className="col">
                            <h5 className='text-center'>Copyright © M23 2022</h5>
                            <p className='kaki text-center'>Website built with React JS and Bootstrap with Illustrations by <a href='#'>Apriliano Peramu</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer