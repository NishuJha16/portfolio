import React from 'react';
import './App.scss';
import Home from './pages/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <Home/>
      <ToastContainer/>
    </div>
  );
}

export default App;
