import React, { Component } from 'react'
import '../Styles/style.css';
import axios from 'axios';
import "../vendor/bootstrap/css/bootstrap.min.css";
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../vendor/animate/animate.css";
import "../vendor/css-hamburgers/hamburgers.min.css";
import "../vendor/animsition/css/animsition.min.css";
import "../vendor/select2/select2.min.css";
import "../vendor/daterangepicker/daterangepicker.css";
import "../css/util.css";
import "../css/main.css";

export default class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [],
            
        }

        this.state.project = {
            title: "",
            description: "",
            
        }
        

       
    }
    
    componentDidMount() {
        axios.get("http://localhost:8080/projects/").then(response => {
            console.log(response.data[0].id);
            console.log(response.data[this.props.match.params.id - 2]);  //how to pass the array index here??
            
           
                //console.log("hello");
                this.setState({
                    title: response.data[this.props.match.params.id - 2].title,
                    description: response.data[this.props.match.params.id - 2].description
                    
                });

                
            

        });

    
        
        //console.log(this.state.project.title)



    }

    changeTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    changeDescription = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    

    onSubmit = (event) => {
        event.preventDefault();
        const update = {
            // projectId: this.state.project_id,
            title: this.state.title,
            description: this.state.description,
            

        }
        console.log(update);
        //let id=2;
         //const { id } = this.props.match.params
         axios.put("http://localhost:8080/projects/"+ this.props.match.params.id, update).then(response => {
            if (response.status === 200) {
                alert("Your changes have been successfully updated..!");
                window.location.reload();
            }
        });
        // this.setState({
        //     name: "",
        //     severity: "",
        //     priority: ""
        // });
    }
    render() {
        return (
            <div class="container-contact100">

            <div class="wrap-contact100">
                <form class="contact100-form validate-form" onSubmit={this.onSubmit}>
                    <span class="contact100-form-title">
                        Add Project
                    </span>
    
                    <div class="wrap-input100 validate-input" data-validate="Please enter project name">
                        <input class="input100" type="text" name="title" placeholder="Project Name" onChange={this.changeTitle}  value={this.state.title}/>
                        <span class="focus-input100"></span>
                    </div>
                    
                    
                    <div class="wrap-input100 validate-input" data-validate = "Please enter project description">
                        <textarea class="input100" name="description" placeholder="Project Description" onChange={this.changeDescription} value={this.state.description}></textarea>
                        <span class="focus-input100"></span>
                    </div>
                   
                   
                    
                    <div class="container-contact100-form-btn">
                        <button class="contact100-form-btn">
                            <span>
                                <i class="fa fa-paper-plane-o m-r-6" aria-hidden="true"></i>
                                Send
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        )
    }

}