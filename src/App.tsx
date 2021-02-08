import React from 'react';
import LeftMenu from './components/elements/LeftMenu';
import { Route } from 'react-router-dom';
import {Chats, IssuePage, Projects, Settings, Teams} from './components/pages';

function App() {
  return (
    <div style={{display:'flex'}}>
      <LeftMenu />      
      <Route path="/chats" component={Chats}/>
      <Route path="/issues" component={IssuePage}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/teams" component={Teams}/>
    </div>
  );
}

export default App;
