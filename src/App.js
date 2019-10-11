import React from 'react';
//import './App.css';
import Projects from './components/API App/api';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import AddProject from './components/API App/addProject';
import AddDefect from './components/API App/addDefect';
import Defects from './components/API App/defectapi';
import Example from './components/API App/example';
import DefectExample from './components/API App/exampleDefect';
//import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import EditProject from './components/API App/editProject'
import DeleteProject from './components/API App/deleteProject'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Router>

        <Switch>
          <Route path="/projects" exact strict component={Projects} />
          <Route path="/projects/:id/defects" exact strict component={Defects} />
          <Route path="/addProject" exact strict component={AddProject} />
          <Route path="/projects/:id"  exact strict component={DeleteProject} />
          <Route path="/projects/:id/edit"  exact strict component={EditProject} />
          <Route path="/projects/:id/addDefects"  exact strict component={AddDefect} />
          <Route path="/example" exact strict component={Example} />
          {/* <Route path="/exampleDefect" exact strict component={DefectExample} /> */}
          <Route path="/side" exact strict component={Sidebar} />

          {/* <Route path="/head" exact strict component={Header} /> */}
        </Switch>
      </Router>
       
    </div>

    
  );
}

export default App;
