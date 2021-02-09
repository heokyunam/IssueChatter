import React from 'react';
import LeftMenu from './components/elements/LeftMenu/LeftMenu';
import { Route } from 'react-router-dom';
import {Chats, IssuePage, Projects, Settings, Teams} from './components/pages';
import Popup from "./components/popups";

function App() {
  return (
    <div className="App">
      <LeftMenu />      
      <Route path="/chats" component={Chats}/>
      <Route path="/issues" component={IssuePage}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/teams" component={Teams}/>
      <Popup />
    </div>
  );
}

export default App;
