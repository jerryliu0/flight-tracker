import React from 'react';
import Logo from './assets/aa_logo.png'
import './App.css';

import Main from './components/Main';

function App() {
    return (
        <div className="App">
            <img src={Logo} alt='American Airlines' />
            <Main />
        </div>
    );
}

export default App;
