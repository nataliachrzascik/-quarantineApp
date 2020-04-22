import React from 'react';
import './App.scss';
import Menu from "./components/layouts/Menu";
import Main from "./components/layouts/Main";
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from 'react-redux';

import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
