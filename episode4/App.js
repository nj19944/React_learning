import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./data";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo-img" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {

  const {resData} = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  {console.log("hello nishant ") }

  return(
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId 
        }
        
      />
      <h3>{name}</h3>
      <h4 className="cuisines">{cuisines[0]}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
          Search
      </div>
      <div className="res-container">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>This is the Footer Component...</h1>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
