import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { WithAuthApp } from './App';
import { store } from "./modules/store";
import './index.css';

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <WithAuthApp/>
        </Provider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

