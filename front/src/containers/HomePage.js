import React from 'react';
import axios from 'axios';
import Blog from '../components/Blog'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class HomePage extends React.Component {
    state = {
        latest: [],
        authors:[],
        featured: [],
    }
    componentDidMount() {
        axios.get('http://localhost:8000/blog/latest',)
            .then(res =>{
                this.setState({
                    latest:res.data
                });
                console.log(res.data)
            })
            axios.get('http://localhost:8000/blog/popular/authors',)
            .then(res =>{
                this.setState({
                    authors:res.data
                });
                console.log(res.data)
            })
            axios.get('http://localhost:8000/blog/featured/list',)
            .then(res =>{
                this.setState({
                    featured:res.data
                });
                console.log(res.data)
            })
    }

    render(){
        return(
            <div>
            
                    <Blog data={this.state}/>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      userdata: state.userdata
    }
  }


export default connect(mapStateToProps)(HomePage);