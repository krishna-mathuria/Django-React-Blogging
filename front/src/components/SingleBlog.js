import  React,{Component} from 'react';
import {Link} from 'react-router-dom'
import '../Home.css';

class SingleBlog extends Component{
    constructor(props){
        super(props)
    }
        
        
        render(){
        return(

<div className="SingleBlog">

 <div className="grid-item-categories">
  <div className="thumbnail_container-categories">
      <div className="thumbnail-categories">

        <img src={this.props.data.thumbnail} align="right" className="" />
       
    <Link to={"blog/"+this.props.data.slug}><button className="b2-categories">Read</button></Link>

        <h6>{this.props.data.title}</h6>
        <p>{this.props.data.description}</p>
      
   </div>
     </div>
      </div>

      </div>



        );
                
            
      }
    }
        
    

    

export default SingleBlog;