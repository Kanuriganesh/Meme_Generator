import React from 'react'
import './index.css'

import { AiFillCheckCircle } from 'react-icons/ai';
import { RiErrorWarningFill } from 'react-icons/ri';
import { MdWarning, MdInfo } from 'react-icons/md'; // Combined the MdWarning and MdInfo import
import { GrFormClose } from 'react-icons/gr'; // This might be useful later

const Notification = props => {
   const {eachItem}=props;
   const {icon:Icon,heading,paragraph,color,dlt:Del} = eachItem;
  return (
    <div className="card-container">
      <Icon className="icons ghani" style={{color}}/>
      <div className="second-card-container">
        <div>
           <h1 className="heading" style={{color}}>{heading}</h1>
           <p className="paragraph">{paragraph}</p>
        </div>
        <Del className='ghani1' />
      </div>
    </div>
  )
}
export default Notification
