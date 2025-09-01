import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="contactoDev">
                <p>Desarrollado por Montenegro Matias | &copy; 2025</p>
                <p>Hecho con React</p>
            </div>
            <div className="redesContacto">
                <a href="https://www.instagram.com/matias.montenegro.96/" className="icon-red" target='_blank'><FaInstagram size={30} style={{ color: "white" }} /></a>
                <a href="https://www.linkedin.com/in/matias-montenegro08/" className="icon-red" target='_blank'><CiLinkedin size={30} style={{ color: "white" }} /></a>
                <a href="https://portfolio-personal-sigma-seven.vercel.app/" className="icon-red" target='_blank'><MdWorkOutline size={30} style={{ color: "white" }} /></a>
            </div>
        </footer>
    )
}

export default Footer
