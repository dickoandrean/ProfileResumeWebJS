import React from 'react';
import './Profile.css';
import Ig from '../asets/ig.png'
import Mail from '../asets/mail.png'
import Linkedin from '../asets/linkedin.png';
import Git from '../asets/Git.png';
import { Fab } from '@material-ui/core';
import pdf from '../asets/CV-DickoAndrean.pdf';

const Pdf = () => {
    window.open(pdf);
}


const Profile = () => {

    return <div className='box-b'>
        
        <div><h className='a-title'>PROFILE</h></div>
        <div className='foto_mbl'></div>
        <div className='box-c'><h className='p-title'>"Life Must Be Flexible" </h>
        <div><p>Hi. My name Dicko Andrean. Im Programmer</p>
        <div className='logo-box'>
            <a href='https://www.instagram.com/dickoandrean/' target='blank'><img src={Ig} alt='Ig' className='logo-b'  /></a>
            <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=dickoandrean@gmail.com' target='blank'><img src={Mail} alt='Mail' className='logo-b'  /></a>
            <a href='https://linkedin.com/in/dicko-andrean' target='blank'><img src={Linkedin} alt='Linkedin' className='logo-b' /></a>
            <a href='https://github.com/dickoandrean' target='blank'><img src={Git} alt='Github' className='logo-b' /></a>
            </div>
        </div>
        </div>
        <div className='btn-pr'><Fab color='secondary' variant="extended" className='btn-btn txtbtn' onClick={Pdf}>DOWNLOAD CV</Fab></div>
    </div>

}

export default Profile;