import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './pages/Header';


ReactDOM.render(
    <React.StrictMode>
        <Header title="Meu User App" />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);