import React from 'react'
import Styles from '../Styles/style'
import '../Styles/viewproject.css'
import {Link} from 'react-router-dom';

const Defects = ({ defects }) => {

    return (
                
                   
                    <div>
                        <center>
                            
                            <h1> Defects List</h1>

                            {defects.map((defect,i)=> 
                                <div key={i} style = {Styles.displayProject}>
                                    
                                    <h5>{defect.name}</h5>
                                    <h5>{defect.severity}</h5>
                                    <h5>{defect.priority}</h5>
                                    <Link to = {`defects/${defect.id}`}>
                                        <button className="button-three">Edit Defects</button>
                                    </Link>

                                    <Link to = {`defects/${defect.id}`}>
                                        <button className="button-three">Delete</button>
                                    </Link>
                                    
                                </div>
                                
                                
                                )}

                            
                        </center>
                    </div>
                    
    )
}

export default Defects;