// import React from 'react';
import  React,{Component} from 'react';
import '../Home.css';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/nice-select.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/unslider.css';
import '../css/responsive.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'react-multi-carousel/lib/styles.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module-react';
import uniqueSlug from 'unique-slug'
import { connect } from 'react-redux'
import InlineEdit from 'react-edit-inline2';
Quill.register('modules/imageResize', ImageResize)
Quill.register('modules/imageDrop', ImageDrop);

class EditBlog extends Component{
  constructor (props) {
           super(props)
           this.state = { EditBlogHtml: '', blog: {} , title: '',description:'',user:0}
           this.handleChange = this.handleChange.bind(this)
           this.onSubmit = this.onSubmit.bind(this)
           this.onDelete = this.onDelete.bind(this)
           this.setTitle = this.setTitle.bind(this)
           this.setDescription = this.setDescription.bind(this)
         }
        
    handleChange (html) {
             this.setState({ EditBlogHtml: html });
        }
    setTitle (title) {
           this.setState({ title: title.title });
       }

    setDescription (description) {
         this.setState({ description : description.description });
        }

    componentDidMount(){
        const slug =  this.props.match.params.slug;
        let url = 'http://localhost:8000/blog/' + slug;
        axios.get(url).then(res=>{
            console.log(res.data)
            this.setState({EditBlogHtml: res.data[0].content})
            this.setState({title: res.data[0].title})
            this.setState({description: res.data[0].description})
            this.setState({user: res.data[0].user})

        })
     }


    onSubmit (event){
            const slug =  this.props.match.params.slug;
            let url = 'http://localhost:8000/blog/' + slug+'/edit';
          event.preventDefault();
           const data ={
             content :this.state.EditBlogHtml,
             title: this.state.title,
             user : this.props.userdata.id,
             description:this.state.description,
             slug: slug
           }
    
           axios.put(url, data,      {
             headers: {
              Authorization: 'Token '+ this.props.token ,
                 'Content-Type': 'application/json'

             }}
            )
            .then(res => {
            console.log(res.data);
            this.props.history.push('/blog/'+res.data.slug)
            }).catch(error => {
            console.log(error.response);
            })
    }
        
    onDelete(){
        const slug =  this.props.match.params.slug;
        let url = 'http://localhost:8000/blog/' + slug+'/edit';
        axios.delete(url ,{
          headers: {
           Authorization: 'Token '+ this.props.token ,
          }
        }).then(res=>{
          console.log(res.data)
        })
    }
        
        render(){
        return(

<div className="New colour">


    <div className="colour">
<section>


 <div className="topnav">
 <div className="flex-container">
  
 
 
   <div><a href="#">Categories</a> </div>


   <div><a href="/Home">Home</a></div>
   <div><a href="/Profile">About</a></div>
   <div><a href="/Edit" className="active">Log in</a></div>
   <div><a href="/Blog" >BLOG</a></div>
   <div> <a href="#">Contact</a></div>
   <div> <a href="#" className="fa fa-search"></a> </div>
                             
 
  <a href="javascript:void(0);" className="icon" onclick="Sharad()"><i className="fa fa-bars"></i></a>
  </div>
</div>

</section>


<div className="container-fluid">
<div className="row">

<div className="col-md-12">

<h1 className="blog-test"> EDIT BLOG </h1>

</div>



<div className="col-md-12">
<p className="new1" > <InlineEdit
              activeClassName="editing"
              text={this.state.title}
              paramName="title"
              change={this.setTitle}
              style={{
                backgroundColor: '#FCF9F2',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 0
              }}
            /> <span className="fa fa-pencil"><hr className="hr2-new" /></span> </p>


</div>
<div className="col-md-12">
<p className="new1" > <InlineEdit
              activeClassName="editing"
              text={this.state.description}
              paramName="description"
              change={this.setDescription}
              style={{
                backgroundColor: '#FCF9F2',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 0
              }}
            /><span className="fa fa-pencil"><hr className="hr2-new" /></span> </p>


</div>


    </div>
    </div>

    <div className="container-fluid grid-container-new">
    <div className="row">
    <div className="col-md-1">
    </div>
      <div className="col-md-8 grid-item-new">

       
     
              <ReactQuill 
             theme={this.state.theme}
             onChange={this.handleChange}
             value={this.state.EditBlogHtml}
             modules={EditBlog.modules}
             formats={EditBlog.formats}
             bounds={'.app'}
           placeholder={""}
            />
           <div className="themeSwitcher">
             <label>Theme </label>
             <select onChange={(e) => 
                this.handleThemeChange(e.target.value)}>
              <option value="snow">Snow</option>
             </select>
           </div>
          
        </div>

      </div>
       <button className="join-new" type="button" onClick={this.onSubmit}>Update</button>
       <button className="join-new" type="button" onClick={this.onDelete}>Delete</button>
      </div>
   


<hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>
<br />
<section>
  <br />
    <div className="container-fluid">
    lookup_field


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
  <br />
  <br />
</section>




</div>



</div>



        );
    
  }
  }

        
    EditBlog.modules = {
           imageResize: {
             handleStyles: {
               backgroundColor: 'black',
               border: 'none',
               color: 'white',
             },
             modules: ['Resize', 'DisplaySize', 'Toolbar'],
           },
         imageDrop: true,
           toolbar: [
             [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
             ['bold', 'italic', 'underline', 'strike', 'blockquote'],
             [{'list': 'ordered'}, {'list': 'bullet'}, 
              {'indent': '-1'}, {'indent': '+1'}],
             ['link', 'image', 'video'],
             ['clean']
           ],
          clipboard: {
             // toggle to add extra line breaks when pasting HTML:
             matchVisual: false,
           }
         }
        /* 
          * Quill EditBlog formats
          * See https://quilljs.com/docs/formats/
          */
         EditBlog.formats = [
           'header', 'font', 'size',
          'bold', 'italic', 'underline', 'strike', 'blockquote',
          'list', 'bullet', 'indent',
           'link', 'image', 'video'
         ]
const mapStateToProps = state => {
    return {
      userdata: state.userdata,
      token: state.token
    }
  }
    

export default connect(mapStateToProps)(EditBlog);





