import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./SearchBar.css";
import "./index.css"

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const categories = useSelector(state => state.categories);

  const handleSearch = () => {
    return categories.flatMap(category => 
      category.widgets.filter(widget => widget.name.includes(query) || widget.text.includes(query))
    );
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search widgets..." 
      />
      <div>
        {handleSearch().map(widget => (
          <div key={widget.id}>
            <h3>{widget.name}</h3>
            <p>{widget.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;