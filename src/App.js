import React from 'react'
import './App.css';
import ProfilPhoto from './component/profile/ProfilPhoto'
import { FullName } from './component/profile/FullName'
import { Address } from './component/profile/Address'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfilPhoto className="profilePic" />
        <FullName className="fullName" />
        <Address className="adress" />
      </header>
    </div>
  );
}

export default App;
