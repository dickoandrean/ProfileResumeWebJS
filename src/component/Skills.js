import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Profile.css';
import './skills.css';

const Skills = () => {
    return <div className='box-b'>
        <div><h className='a-title'>Skills</h></div>
        <div className='scrl'>
        <div className='txb' >C++
            <div className='bar'>
                <div className='progress' style={{width:'64%'}}></div>
                </div>
            </div>
            <div className='txb' >JAVA
            <div className='bar'>
                <div className='progress' style={{width:'83%'}}></div>
                </div>
            </div>
            <div className='txb' >JavaScript
            <div className='bar'>
                <div className='progress' style={{width:'56%'}}></div>
                </div>
            </div>
            <div className='txb' >PHP
            <div className='bar'>
                <div className='progress' style={{width:'88%'}}></div>
                </div>
            </div>
            <div className='txb' >MySQL
            <div className='bar'>
                <div className='progress' style={{width:'90%'}}></div>
                </div>
            </div>
            <div className='txb' >Python
            <div className='bar'>
                <div className='progress' style={{width:'78%'}}></div>
                </div>
            </div>
            <div className='txb' >Linux
            <div className='bar'>
                <div className='progress' style={{width:'80%'}}></div>
                </div>
            </div>
            <div className='txb' >Photoshop
                <div className='bar'>
                <div className='progress' style={{width:'85%'}}></div>
                </div>
            </div>
        </div>
        <div className='expand'><ExpandMoreIcon /></div>
    </div>

}

export default Skills;