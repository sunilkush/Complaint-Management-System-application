import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { store } from './app/store';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}><BrowserRouter><ConfigProvider><App /><ToastContainer /></ConfigProvider></BrowserRouter></Provider>
  </React.StrictMode>
);
