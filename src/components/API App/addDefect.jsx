import React, { Component } from "react";
import "../Styles/style.css";
import axios from 'axios';

class AddDefect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            severity: "high",
            priority: "high",
        };
    }

    // changeId = (event) => {
    //     this.setState({
    //         project_id: event.target.value
    //     });
    // }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    changeSeverity = (event) => {
        this.setState({
            option_severity: document.getElementById("severity").value
        })
    }

    changePriority = (event) => {
        this.setState({
            option_priority: document.getElementById("priority").value
        })
    }

    clearField = () => {
        this.setState({
            name: "",
            option_severity: "",
            option_priority:""
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const save = {
            // projectId: this.state.project_id,
            name: this.state.name,
            severity: this.state.option_severity,
            priority: this.state.option_priority

        }
        console.log(save);
        //let id=2;
         const { id } = this.props.match.params
        axios.post('http://localhost:8080/projects/'+ id +'/defects', save).then(response => {
            if (response.status === 200) {
                alert("Project has been successfully added..!");
                window.location.reload();
            }
        });
        this.setState({
            name: "",
            severity: "",
            priority: ""
        });
    }
    render() {
        return (
            <div>
                <div className="addDefect">

                    <form className="formModel" onSubmit={this.onSubmit}>
                        
                        <div className="input-field">
                            <label className="desc">Defect Name</label><br />
                            <input type="text" name="name" value={this.state.name} placeholder="Defect Name" onChange={this.changeName} />
                        </div><br />
                        
                        <div className="input-field">
                            <label className="desc">Severity</label><br />
                            <select id = "severity" className="dropdown" name="option_severity" onChange={this.changeSeverity} >
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div><br />
                        <div className="input-field">
                            <label className="desc">Priority</label><br />
                            <select id = "priority" className="dropdown" name="option_priority" onChange={this.changePriority}>
                                <option value="high" >High</option>
                                <option value="medium" >Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div><br />
                        <div className="btn-grp">
                            <input type="submit" value="Add" />
                            <input type="button" value="Clear" onClick ={this.clearField}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default AddDefect;