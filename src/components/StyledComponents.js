import React from 'react'
import './index.css'
const  StyledComponents=(props)=> {
  console.log(props)
  const {fontSize, imageUrl,topText,bottomText} = props;
  return (
     <div className='main-container' style={{
      backgroundImage: `url(${imageUrl})`
     }} >
        <h1 className='heading12'style={{fontSize:`${fontSize}px`}}>{topText}</h1>
        <h1 className='heading12' style={{fontSize:`${fontSize}px`}}  >{bottomText}</h1>
     </div>
  )
}
export default StyledComponents;
