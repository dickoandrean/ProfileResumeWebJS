import React from 'react';
import './Profile.css';
import './school.css' ;
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const School = () =>{
    return <div className='box-b'>
        <div><h className='a-title'>EDUCATIONS</h></div>
        <div className='scrl'>
        <div className='txt-box' >
            <h className='th-txt'>2001 - 2007</h>
            <h className='a-txt'><ArrowRightIcon />  Elementary School</h>
            <p className='p-txt'>Elementary School Dian Andalas Padang</p>
        </div>
        <div className='txt-box' >
            <h className='th-txt'>2007 - 2010</h>
            <h className='a-txt'><ArrowRightIcon />  Junior High School</h>
            <p className='p-txt'>National Junior High School 11 Padang</p>
        </div>
        <div className='txt-box' >
            <h className='th-txt'>2010 - 2014</h>
            <h className='a-txt'><ArrowRightIcon />  Vacational School</h>
            <p className='p-txt'>SMAK Chemical Analyst Padang</p>
        </div>
        <div className='txt-box' >
            <h className='th-txt'>2016 - 2021</h>
            <h className='a-txt'><ArrowRightIcon />  University</h>
            <p className='p-txt'>Muhammadiyah University of Riau</p>
            <p className='p-txt'>Informatics Engineering</p>
        </div>
        </div>
        <div className='expand'><ExpandMoreIcon /></div>
    </div>

}

export default School;