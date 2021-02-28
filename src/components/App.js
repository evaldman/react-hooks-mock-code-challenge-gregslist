import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
    const [listings, setListings] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
      fetch("http://localhost:6001/listings")
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => setListings(data))
    }, [])

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer search={search} listings={listings} setListings={setListings}/>
    </div>
  );
}

export default App;
