import React from 'react'
import { Component } from 'react'; 
import './App.css'
import Index from './components/index.js';
import StyledComponents from './components/StyledComponents.js'
class App extends Component{
    state={generateMeme:false,imageUrl:"",topText:"",bottomText:"",fontSize:""} 
    
    displayTheMeme=(imageUrl,topText,bottomText,fontSize)=>{
          
          this.setState({generateMeme:true,imageUrl:imageUrl,topText:topText,bottomText:bottomText,fontSize:fontSize})
    }  
    render(){
        const {generateMeme,imageUrl,topText,bottomText,fontSize} = this.state;
        return(
            <div className='meme-container'>
                <Index  displayTheMeme={this.displayTheMeme}/>   
                {generateMeme  && <StyledComponents fontSize={fontSize}  imageUrl={imageUrl} topText={topText} bottomText={bottomText}/>}
                
            </div>
        )
    }
}
export default  App;