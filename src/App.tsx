import React, { useState } from 'react';
import './App.css';
import jsonData from './CollegeBasketballTeams.json';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Heading() {
  return (
    <div className="text-center mb-4">
      <h1 className="py-3">NCAA Basketball Teams</h1>
      <h4 className="col-sm-8 mx-auto">This list is a comprehensive directory of all NCAA Division I basketball teams. It provides details about each school including their name, mascot, and location.</h4>
    </div>

  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="col-sm-3 m-1 py-3 bg-dark bg-gradient text-white">
        <h5>{oneTeam.school}</h5>
        <p><span className="fw-bold">Mascot:</span> {oneTeam.name}</p> 
        <p><span className="fw-bold">Location:</span> {oneTeam.city}, {oneTeam.state}</p>  
        <br></br>     
      </div>

    );
  }
}

function TeamList() { 
  return (
    <div className="row justify-content-center">    
      {jsonData.teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="container bg-secondary-subtle">
      <Heading />
      <TeamList />      
    </div>
  );
}

export default App;
