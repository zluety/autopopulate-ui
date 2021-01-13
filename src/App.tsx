import React, { useState } from 'react';
import './App.css';
import { NavBar } from './NavBar';
import { SearchInput } from "./SearchInput";
import { Results } from "./Results";
import filterResults from './filterResults';



function App() {
  const [query, setQuery] = useState(filterResults("", 20));

  const handleSearchChange = (event: any) => {
    setQuery(filterResults(event.target.value, 20));
  }

  return (
    <div className="App">
      <div id="nav-window">
        <NavBar />
      </div>
      <div>
        <SearchInput fn={handleSearchChange}/>
        <Results data={query} />
      </div>
    </div>
  );
}

export default App;
