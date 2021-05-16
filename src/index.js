import React from 'react';
import ReactDOM from 'react-dom';
import { WithAuthApp } from './App';
import { AuthProvider } from "./AuthContext";
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <AuthProvider>
          <WithAuthApp/>
        </AuthProvider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

