import React from 'react';
import './App.css';
import ControlPanelContainer from './Components/ControlPanel/ControlPanelContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import ScheduleContainer from './Components/Schedule/ScheduleContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="flexApp">
        <ScheduleContainer />
        <ControlPanelContainer />  
      </div>     
    </div>
  );
}

export default App;
