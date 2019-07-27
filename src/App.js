import React, { useState, useEffect } from 'react';
import './App.css';

const API = 'https://jsonplaceholder.typicode.com/users'

const App = props => {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(users => setMonsters(users))
  })

  return (
    <div className="App">
      {
        monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
      }
    </div>
  );
}

export default App;
