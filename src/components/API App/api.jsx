import React, {Component} from 'react'
import Projects from './projects'
class App extends Component {
    state = {
        projects:[]
    }

    componentDidMount(){
        fetch('http://localhost:8080/projects')
        .then(res=>res.json())
        .then((data)=>{
            this.setState({projects:data})
        })
        .catch(console.log)
        console.log(this.state.projects)


    }

        

    


    render(){
      
        return (
            <div>
                <Projects projects={this.state.projects} />
            </div>

            
        );
    }
}


export default App;