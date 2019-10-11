import React, { Component } from "react";
import axios from 'axios';
import "../images/icons/favicon.ico";
import "../vendor/bootstrap/css/bootstrap.min.css";
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../vendor/animate/animate.css";
import "../vendor/css-hamburgers/hamburgers.min.css";
import "../vendor/animsition/css/animsition.min.css";
import "../vendor/select2/select2.min.css";
import "../vendor/daterangepicker/daterangepicker.css";
import "../css/util.css";
import "../css/main.css";
//import "../vendor/jquery/jquery-3.2.1.min.js";
//import "../vendor/animsition/js/animsition.min.js";
//import "../css/dropdown.css";
import "../Header/header";


class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
            
        };
    }

    // changeId = (event) => {
    //     this.setState({
    //         project_id: event.target.value
    //     });
    // }

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
        const save = {
            // projectId: this.state.project_id,
            title: this.state.title,
            description: this.state.description,
           

        }
        console.log(save);
        
        axios.post("http://localhost:8080/projects", save).then(response => {
            if (response.status === 200) {
                alert("Project has been successfully added..!");
                window.location.reload();
            }
        });
        this.setState({
            title: "",
            description: ""
           
        });
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
                        <input class="input100" type="text" name="name" placeholder="Project Name" onChange={this.changeTitle} />
                        <span class="focus-input100"></span>
                    </div>
                    
                    
                    <div class="wrap-input100 validate-input" data-validate = "Please enter project description">
                        <textarea class="input100" name="message" placeholder="Project Description" onChange={this.changeDescription}></textarea>
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
        );
    }

}

export default Example;