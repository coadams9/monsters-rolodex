import React, { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

const API = 'https://jsonplaceholder.typicode.com/users'

const App = props => {
  const [monsters, setMonsters] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(users => setMonsters(users))
  }, [])

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters' handleChange={e => setSearchTerm(e.target.value)} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
