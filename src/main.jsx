import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/scss/style.scss';
import reportWebVitals from './reportWebVitals.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();