import  React,{Component} from 'react';
import Slider from 'infinite-react-carousel';
import '../Home.css';
import SingleBlog from '../components/SingleBlog';
import Axios from 'axios';



class AllBlogs extends Component{   
constructor(props){
    super(props);
    this.state = {
      data: [],
      blogs: []
    }
  }


  componentDidMount(){
   Axios.get("http://localhost:8000/blog/all")
   .then(res=>{
       this.setState({blogs:res.data})
       console.log(this.state.blogs)
    
    var tempArray=[];
    var n=this.state.blogs.length;
    for(var i=0; i<n;i++)
    {
      tempArray.push(<SingleBlog data={this.state.blogs[i]} />);
    
  }

this.setState({
      data: tempArray
    });
})

}

        render(){
        return(

<div className="Categories main colour">
<section>


 <div className="topnav">
 <div className="flex-container">
  
 
 
   <div><a href="/Home">Home</a> </div>


   <div><a href="/Login">Log in</a></div>
   <div><a href="/Profile">About</a></div>
   <div><a href="/AllBlog" className="active">Categories</a></div>

 
   
     <div><a href="/Blog" >BLOG</a></div>
                               <div> <a href="/Edit">Contact</a></div>
                               <div> <a href="#" className="fa fa-search"></a> </div>
                             
   </div>
  <a href="javascript:void(0);" className="icon" onclick="Sharad()"><i className="fa fa-bars"></i></a>

</div>

</section>

<div className="container-fluid">
<div className="row">
<div className="col-md-12">
   <div className="grid-container-categories">
    <div>
     {this.state.data}
      </div>
      
  </div>

</div>
</div>
</div>
<section>
  <br />
    <div className="container-fluid">
       


      <div className="row align-items-center footer3">
    
  <div  className= "col-md-6 footer5">
    <h className="footer6">
     Terms of Use  |  Privacy Policy  |  Cookies
   </h>
  
 

</div>
<div className="col-md-3 col-md-offset-3">
  <a href="https://www.facebook.com/upesacm/" className="fa fa-facebook"></a>
<a href="https://twitter.com/upesacm?lang=en" className="fa fa-twitter"></a>
<a href="https://www.instagram.com/upesacm/?hl=en" className="fa fa-instagram"></a>
<a href="https://www.linkedin.com/company/upesacm/" className="fa fa-linkedin"></a>
</div>
   
</div>
</div>
</section>
<br />

<section>
  <div className="container-fluid">
       


        <div className="row  align-items-center footer3">
    <div className=" col-md-12 footer5">
    <h className="footer6">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur . Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </h>
  </div>
</div>
  </div>
</section>
<br/>
</div>


        );
                
            
      }
    }
        
    

    

export default AllBlogs;