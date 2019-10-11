import React, { Component } from "react";
import "../Styles/style.css";
import axios from 'axios';

class AddProject extends Component {
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
                        <input class="input100" type="text" name="title" placeholder="Project Name" onChange={this.changeTitle} />
                        <span class="focus-input100"></span>
                    </div>
                    
                    
                    <div class="wrap-input100 validate-input" data-validate = "Please enter project description">
                        <textarea class="input100" name="description" placeholder="Project Description" onChange={this.changeDescription}></textarea>
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

export default AddProject;