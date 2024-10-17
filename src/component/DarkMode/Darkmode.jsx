import React from 'react';
import './Darkmode.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons'

const Darkmode = () => {

    const DarkHandle=()=>{
        document.querySelector('body').classList.toggle('darkMode');
    }

  return (
    <div className='DarkSettings'>
      <FontAwesomeIcon icon={faCog} className="dark-mode" onClick={DarkHandle} />

     <span className='span-setting'>Settings</span> 
    </div>
  );
}

export default Darkmode;
