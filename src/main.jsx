import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {Provider as ReduxProvider} from "react-redux";
import {Store} from "./store/store"

ReactDOM.render(
  
  <React.StrictMode>
    <ReduxProvider store = {Store}>
    <BrowserRouter >
    <App />
    </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
