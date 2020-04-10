import React, { useState } from 'react'
import './App.css'
import PhotoBlackpink from './components/PhotoBlackpink'
import NewLoginForm from './components/NewLoginForm';

function App() {
  const [Login, setLogin] = useState(false);
  return (
    <div className="App">
      <h1>MiniProject</h1>
      <NewLoginForm setLogin={setLogin} />
      {Login && <PhotoBlackpink />}
    </div>
  );
}

export default App;
