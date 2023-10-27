import React from "react";
import CardItems from "./CardItems";
import "./Card.css";
import image1 from "./images/img-9.jpg";
import image2 from "./images/img-2.jpg";
import image3 from "./images/img-3.jpg";
import image4 from "./images/img-4.jpg";
import image5 from "./images/img-8.jpg";

function Card() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destination!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={image1}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src={image2}
              text="Travel through the Islands of Bali  in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src={image3}
              text="Set sail in the atlantic Ocean visiting Uncharted Waters "
              label="Mistery"
              path="/services"
            />
            <CardItems
              src={image4}
              text="Experience football on Top of the Himilayan Moutains"
              label="Adventure"
              path="/services"
            />
              <CardItems
              src={image5}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
