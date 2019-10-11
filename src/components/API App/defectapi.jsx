import React, {Component} from 'react'
import Defects from './defects'
class AppDefect extends Component {
    state = {
        defects:[]
    }

    componentDidMount(){
        const {id} = this.props.match.params
        fetch(`http://localhost:8080/projects/${id}/defects`)
        .then(res=>res.json())
        .then((data)=>{
            this.setState({defects:data})
        })
        .catch(console.log)
        console.log(this.state.defects)

    }

        

    

    render(){
      
        return (
            <div>
                <Defects defects={this.state.defects} />
            </div>

            
        );
    }
}


export default AppDefect;