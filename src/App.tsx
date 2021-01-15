import React, { useState } from 'react';
import './App.css';
import { NavBar } from './NavBar';
import { SearchInput } from "./SearchInput";
import { DetailsListExample } from './DetailsListExample';
import filterResults from './filterResults';

function App() {
  const [query, setQuery] = useState(filterResults("", 20));

  const handleSearchChange = (event: any) => {
    setQuery(filterResults(event.target.value, 20));
  }

  return (
    <div className="App">
        <NavBar />
        <SearchInput handleChange={handleSearchChange}/>
        <DetailsListExample />
    </div>
  );
}

export default App;
