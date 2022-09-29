import React, {useEffect,useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [gregsCard,setGregsCard]=useState([])
  const [searchBar,setSearchBar]=useState("")

  function loadData(){
    fetch('http://localhost:6001/listings')
    .then(resp=>resp.json())
    .then(data=>setGregsCard(data))
  }
  useEffect(loadData,[])

  function handleSearch(newSearch){
    setSearchBar(newSearch)
  }

  const filteredListings=gregsCard.filter((oneCard)=>oneCard.description.toLowerCase().includes(searchBar.toLowerCase()))
 
// console.log(gregsCard)
  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer gregsCard={filteredListings} setGregsCard={setGregsCard} />
    </div>
  );
}

export default App;
