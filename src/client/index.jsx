import React from 'react'
import ReactDOM from 'react-dom/client';
import App from '../App'

window.addEventListener('load', () => {
    const root = ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
})