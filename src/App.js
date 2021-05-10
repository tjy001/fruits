import logo from './logo.svg';
import './App.css';
import React from 'react';
import Role from './components/role';
import AccessGroups from './components/accessgroups';
import Tags from './components/tags';
import Data from './components/data';

const App = () => {
  return (
    <React.Fragment>
      <Role />
      <AccessGroups />
      <Tags />
      <Data />
    </React.Fragment>
  )
}

export default App;
