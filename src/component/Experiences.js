import React from 'react';
import './Profile.css';
import './experiences.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Experiences = () => {
    return  <div className='box-b'>
        <div><h className='a-title'>Experiences</h></div>
        <div className='scrl1'>
        <div className='txt-box' >
            <h className='th-txt'>Aug 2013 - Dec 2013</h>
            <div><h className='h-txt'><ArrowRightIcon />PT. Semen Padang</h>
            <p className='p-txt' style={{fontSize:'25px'}}>Internship</p>
            <p className='p-txt' style={{marginTop:'-33px'}}>Laboratorium Quality Asurance and Technical service</p>
            </div>
        </div>
        <div className='txt-box' >
            <h className='th-txt'>April 2014 - Sept 2015</h>
            <div><h className='h-txt'><ArrowRightIcon />PT. Pelita Agung Agrindustri</h>
            <p className='p-txt' style={{fontSize:'25px'}}>Quality Asurance (Analyst)</p>
            <p className='p-txt' style={{marginTop:'-33px'}}>Refinery, Biodiesel, Glycerine,KCP, Palm oil</p>
            </div>
        </div>
        <div className='txt-box' >
            <h className='th-txt'>Jan 2016 - Nov 2018</h>
            <div><h className='h-txt'><ArrowRightIcon />PT. Indomarco Prismatama</h>
            <p className='p-txt' style={{fontSize:'25px'}}>Inventory Control</p>
            <p className='p-txt' style={{marginTop:'-33px'}}>Investigation, Admin, CCTV</p>
            </div>
        </div>
        <div className='txt-box' >
            <h className='th-txt'>Aug 2019- Sept 2020</h>
            <div><h className='h-txt'><ArrowRightIcon />Riau Barcode</h>
            <p className='p-txt' style={{fontSize:'25px'}}>IT Support</p>
            </div>
        </div>
        </div>
        <div className='expand'><ExpandMoreIcon /></div>
    </div>


}

export default Experiences;