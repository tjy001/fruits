import logo from './logo.svg';
import './App.css';
import React from 'react';
import Role from './components/role';
import Subscriptions from './components/subscriptions';
import Tags from './components/tags';
import Data from './components/data';

const App = () => {
  return (
    <React.Fragment>
      <Role />
      <Subscriptions />
      <Tags />
      <Data />
    </React.Fragment>
  )
}

export default App;
