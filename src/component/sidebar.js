import React from 'react';
import './sidebar.css';
import Photo from './photo';
import Ig from '../asets/ig.png'
import Mail from '../asets/mail.png'
import Linkedin from '../asets/linkedin.png';
import Git from '../asets/Git.png';
import { Fab } from '@material-ui/core';
import pdf from '../asets/CV-DickoAndrean.pdf';

const Pdf = () => {
    window.open(pdf);
}

const Sidebar = () =>{
return (
    <div className='sidebar'>
        <Photo />
        <text>DICKO ANDREAN</text>
        <h2 className='a1'>PROGRAMMER</h2>
        <div className='logo-div'>
            <a href='https://www.instagram.com/dickoandrean/' target='blank'><img src={Ig} alt='Ig' className='logo'  /></a>
            <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=dickoandrean@gmail.com' target='blank'><img src={Mail} alt='Mail' className='logo'  /></a>
            <a href='https://linkedin.com/in/dicko-andrean' target='blank'><img src={Linkedin} alt='Linkedin' className='logo' /></a>
            <a href='https://github.com/dickoandrean' target='blank'><img src={Git} alt='Github' className='logo' /></a>
            </div>
        <div className='btn'><Fab color='secondary' variant="extended" className='btn-btn txtbtn' onClick={Pdf}>DOWNLOAD CV</Fab></div>
    </div>	
);
};

export default Sidebar;