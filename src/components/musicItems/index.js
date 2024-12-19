import { Component } from "react";
import './index.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class MusicItems extends Component{
     updatingFunction=(id)=>{
        const {remove} = this.props;
              remove(id)      
    }
    render(){
        const {eachItem,remove} = this.props; 
        console.log(eachItem)
        const {duration,genre,id,imageUrl,name} = eachItem
        return(
            <div className="first-image-item-container">
                 <div className="second-image-item-container">
                     <img src={imageUrl} className="image"/> 
                     <div className="third-image-item-container">
                          <h1 className="heading1">{name}</h1>    
                          <h1 className="heading2">{genre}</h1>
                     </div>  
                 </div>
                 <div  className="fourth-image-item-container">
                        <p className="para">{duration}</p>
                        <FontAwesomeIcon icon={faTrash}  onClick={()=>this.updatingFunction(id)}className="icon1" />
                 </div>

            </div>
        )
    }
}
export default MusicItems;