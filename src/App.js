import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import SearchPage from './SearchPage'

import './App.css'

const App = () => (
  <div className="app">
    <Route exact path="/" component={Home}/>
    <Route path="/search" component={SearchPage}/>
  </div>
);

export default App