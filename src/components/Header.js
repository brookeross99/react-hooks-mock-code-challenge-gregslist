import React from "react";
import Search from "./Search";

function Header({searchBar,setSearchBar,onSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchBar={searchBar} setSearchBar={setSearchBar} onSearch={onSearch}/>
    </header>
  );
}

export default Header;
