import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant ] =useState([]);
useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional Chaining
    setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};

//conditional Rendering

  return listOfRestaurants.length === 0 ? (
  <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input 
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
        />
        <button onClick={ () => {
           const filteredRestaurant =
           listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filteredRestaurant);
        }}
        >
            search
            </button>

      </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;