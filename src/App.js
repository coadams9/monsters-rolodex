import React, { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

const API = 'https://jsonplaceholder.typicode.com/users'

const App = props => {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(users => setMonsters(users))
  }, [])

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
