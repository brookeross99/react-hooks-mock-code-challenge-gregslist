import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({gregsCard,setGregsCard}) {



  const handleDeleteListing=(projectId)=>{
  setGregsCard(gregsCard=>gregsCard.filter(gregsCard => gregsCard.id !== projectId))}

  // function handleDeleteListing(id){
  //     const updatedListingsArray=gregsCard.filter(
  //       (listing)=>listing.id !== id
  //     );
  //     setGregsCard(updatedListingsArray)
  //   }

  const renderGregsCard=gregsCard.map((oneCard)=>(
    <ListingCard 
      key={oneCard.id}
      id={oneCard.id}
      description={oneCard.description}
      image={oneCard.image}
      location={oneCard.location}
      onDeleteListing={handleDeleteListing}
    />
  ))

  

  return (
    <main>
      <ul className="cards">
        {renderGregsCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
