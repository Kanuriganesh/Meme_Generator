import React from 'react'
import './index.css'
import {useState} from 'react'
const Index=props=>{
    const {displayTheMeme} = props;
    const submittingForm=()=>{
       /* console.log("submitt the form") ;
        console.log("imageUrl",imageUrl);
        console.log("toptext",toptext);
        console.log("bottomtext",bottomtext);
        console.log("selectOption",selectOption);  */
        displayTheMeme(imageUrl, toptext, bottomtext, selectOption);
    } 
    const [imageUrl,setimageUrl] = useState("");
    const [toptext,settoptext] = useState("");
    const [bottomtext,setbottomtext] = useState("");
    const [selectOption,setselectOption] = useState("");
    const updateTheImage=(event)=>{
        setimageUrl(event.target.value);
    }
    const updateTheTopText=(event)=>{
         settoptext(event.target.value)
    }
    const updateTheBottomText=(event)=>{
        setbottomtext(event.target.value)
    }
    const updateSelect=(event)=>{ 
          setselectOption(event.target.value)
    }
    return(
       <div className='meme-sub-contianer'>  
           <h1 className='headingg'>Meme Generator</h1>  
           <div className='sub-container'>
           <label for="imageurl">Image URL</label>
           <input id="imageurl"  onChange={updateTheImage} type="text" placeholder='Enter the Image URL'/> 
           </div>
           <div className='sub-container'>
           <label for="toptext">Top Text</label>
           <input id="toptext" type="text" onChange={updateTheTopText} placeholder='Enter the Top Text'/>  
           </div>
           <div className='sub-container'>
           <label for="bottomtext">Bottom Text</label>
           <input id="bottomtext" type="text" onChange={updateTheBottomText} placeholder='Enter the Bottom Text'/>   
           </div>
           <div   className='sub-container'>
           <label>Font Size</label>
           <select value={selectOption} onChange={updateSelect}>
              <option value="8">8</option>
              <option  value="12">12</option>
              <option  value="16">16</option>
              <option  value="20">20</option>
              <option  value="24">24</option> 
              <option  value="28">28</option>
              <option  value="32">32</option>
           </select>
           </div>  
           <button className='button-element' onClick={submittingForm}>Generate</button>
       </div>
    )
}
export default Index;