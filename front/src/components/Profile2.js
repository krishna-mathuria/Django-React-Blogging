import  React,{Component} from 'react';
import '../Home.css';
import {Link} from 'react-router-dom'

class Profile2 extends Component{

        
        
        render(){
        return(

<div className="Profile">

 <div className="grid-item-profile">

        <img src={"http://localhost:8000"+this.props.data.thumbnail} align="right" className="img2-profile" />
       
     

        <Link to={'/blog/'+this.props.data.slug}><h4 className="profile-text">{this.props.data.title}</h4></Link>
        <p className="profile-text">{this.props.data.description}</p>
        <Link to={'/blog/'+this.props.data.slug+'/edit'}><button className="b2-profile">Edit</button></Link>

      </div>

      </div>



        );
                
            
      }
    }
        
    

    

export default Profile2;