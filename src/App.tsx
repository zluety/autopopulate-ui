import React from 'react';
import './App.css';
import { NavBar } from './NavBar';
import SearchInput from "./SearchInput";

const handleSearchChange = (event: any) => { console.log(event) };

function App() {
  return (
    <div className="App">
        <div id="nav-window">
          <NavBar />
        </div>
        <div>
          <SearchInput textChange={handleSearchChange} />
        </div>
    </div>
  );
}

export default App;
