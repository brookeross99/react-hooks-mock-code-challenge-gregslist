import React,{useState} from "react";

function Search({searchBar,setSearchBar,onSearch}) {

  const[currentSearch,setCurrentSearch]=useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch)
  }
// console.log(searchBar)
// console.log(setSearchBar)

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
