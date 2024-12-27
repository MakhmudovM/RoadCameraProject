import React from "react";
import { Link } from "react-router-dom";
import styles from './Footer.module.css'
import navbar_styles from '../Navbar/Navbar.module.css'

import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => (
    <footer className={styles.footer}>
      <div className='left'>
        <nav className={styles.footer_nav + " " + navbar_styles.navbar}>
          <Link className='logo' to="/">RoadCamera</Link>
          <div className='links'>
            <Link className='link' to="/dashboard">Dashboard</Link>
            <Link className='link' to="/about">About</Link>
          </div>
        </nav>
      </div>

      <div className='right'>
        <p>&copy; 2024 RoadCamera. All Rights Reserved.</p>
        <p>Created by: <a href="https://t.me/KOLEN_Z" target='blanck'>Kolen</a> & <a href="https://t.me/khudoberdi0410" target='blanck'>Khudoiberdi</a></p>
        <ul className='link_list'>
          <li><a href="https://t.me/KOLEN_Z" target='blanck'><FaTelegram className='link_list_a'/></a></li>
          <li><a href="https://github.com/MakhmudovM" target='blanck'><FaGithub className='link_list_a'/></a></li>
          <li><a href="https://t.me/khudoberdi0410" target='blanck'><FaTelegram className='link_list_a'/></a></li>
          <li><a href="https://github.com/xudoyberdi0410" target='blanck'><FaGithub className='link_list_a'/></a></li>
        </ul>
      </div>
    </footer>
  );

export default Footer