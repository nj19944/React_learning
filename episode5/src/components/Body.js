import resList from '../utils/mockData'
import RestaurantCard from './RestaurantCard';
import { useState } from "react";

const Body = () => {

    const [listOfResutaurants, setListOfResutaurants] = useState(resList);

    return (
      <div className="body">
        <div className="search-container">
            Search 
        </div>
        <div className="filter">
            <button className="filter-btn" 
                onClick = { () => {
                    const filterList = listOfResutaurants.filter(
                        (res) => res.data.avgRating > 4
                    );

                    setListOfResutaurants(filterList);
                }}  
            >
                Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
            {listOfResutaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
        </div>
      </div>
    );
  };

export default Body;