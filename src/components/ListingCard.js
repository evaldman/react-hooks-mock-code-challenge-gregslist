import React, {useState}  from "react";

function ListingCard({id, description, image, location, listings, setListings}) {
  const [favorite, setFavorite] = useState(false)

  function handleClick(){
    setFavorite(!favorite)
  }

  function deleteListing(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
  })
    setListings(listings.filter((listing) => listing.id !== id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={deleteListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
