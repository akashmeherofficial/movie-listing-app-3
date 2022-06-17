import React from "react";
import Cart from "../media/Cart.png";

const Store = () => {
  return (
    <div className="s-container">
      <h1>Services</h1>

      <div className="s-main">
        <div className="items">
          <h2>Rental Service</h2>{" "}
          <p>
            You don't have to purchase a movie when you can watch it in rent
          </p>
          <button className="items-btn">Rent now</button>
        </div>
        <div className="items">
          <h2>Monthly Subscription</h2>
          <p>
            For binge watch of series, movies, biography, TV shows, It's the
            best choice
          </p>
          <button className="items-btn">Subscribe</button>
        </div>
        <div className="items cartitm">
          <h2>Go to Store</h2>

          <img src={Cart} alt="cart" />

          <button className="items-btn">Visit</button>
        </div>
        <div className="items">
          <h2>Fan Club Store</h2>
          <p>
            Fan of any cinema or webseries or any character? Contact us to get
            T-shirt, Mugs, Pillow on the theme of your choice
          </p>
          <button className="items-btn">Order Now</button>
        </div>
        <div className="items">
          <h2>Watch with a friend</h2>
          <p>
            Far away from your loved ones? No worries. Now you can watch
            together through chats, reaction interactions, Giphy and many more.
          </p>
          <button className="items-btn">Start</button>
        </div>
      </div>
    </div>
  );
};

export default Store;
