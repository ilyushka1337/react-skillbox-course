import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from '../shared/Header.jsx'


window.addEventListener('load', () => {
    const root = ReactDOM.hydrateRoot(document.getElementById('root'), <Header></Header>);
})