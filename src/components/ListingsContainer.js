import React, {useState} from "react";
import ListingCard from './ListingCard'
// import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings, search}) {
  const [sortBy, setSortBy] = useState("")

  if (sortBy === "location") {
    listings.sort((a, b) => a.location.localeCompare(b.location))
  }

  const filteredListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))
  
  // if (sortBy === "location") {
  //   listings.sort((a, b) => a.location.localeCompare(b.lacation))
  // }
  const displayListings = filteredListings.map((listing) => {
    return(
      <ListingCard 
      key={listing.id}
      id={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
      listings={listings}
      setListings={setListings}
      />
    )
  })
  
  function handleSort(e){
    setSortBy(e.target.value)
  }

  return (
    <main>
      <select onChange={handleSort}>
            <option value hidden>Please select</option>
                <option value="location">Location</option>
                
            </select>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
