import React from 'react'
import Styles from '../Styles/style'
import '../Styles/viewproject.css'
import {Link} from 'react-router-dom';

const Projects = ({ projects }) => {

    return (
                
                   
                    <div>
                        <center>
                            
                            <h1> Project List</h1>

                            {projects.map((project,i)=> 
                                <div key={i} style = {Styles.displayProject}>
                                    
                                    <h5>{project.title}</h5>
                                    <h5>{project.description}</h5>
                                    <Link to = {`projects/${project.id}/edit`}>
                                         <button type="button" class="btn btn-primary btn-sm btn3d">Edit</button>
                                    </Link>

                                    <Link to = {`projects/${project.id}`}>
                                         <button type="button" class="btn btn-danger btn-sm btn3d">Delete</button>
                                    </Link>

                                    <Link to = {`projects/${project.id}/addDefects`}>
                                         <button type="button" class="btn btn-primary btn-lg btn3d">Add Defects</button>
                                    </Link>

                                    <Link to = {`projects/${project.id}/defects`}>
                                         <button type="button" class="btn btn-success btn-lg btn3d"><span class="glyphicon glyphicon-ok"></span> View Defects</button>
                                    </Link>

                                   

                                </div>
                                
                                
                                )}

                            
                        </center>
                    </div>
                    
    )
}

export default Projects;