import React from "react";

const Services = () => {
  return (
    <div className="s-container">
      <h1>Services</h1>

      <div className="s-main">
        <div className="items">
          <i class="uil uil-hourglass"></i>
          <h2>Rental Service</h2>{" "}
          <p>
            You don't have to purchase a movie when you can watch it in rent
          </p>
          <button className="items-btn">Rent now</button>
        </div>
        <div className="items">
          <i class="uil uil-calender"></i>
          <h2>Monthly Subscription</h2>
          <p>
            For binge watch of series, movies, biography, TV shows, It's the
            best choice
          </p>
          <button className="items-btn">Subscribe</button>
        </div>
        <div className="items cartitm">
          <i class="uil uil-ticket"></i>
          <h2>Book a movie</h2>

          <p>
            Want to Book a movie to watch on your nearest theatre.What are you
            waiting for? Book Now!
          </p>

          <button className="items-btn">Visit</button>
        </div>
        <div className="items">
          <i class="uil uil-store"></i>
          <h2>E-Store</h2>
          <p>
            Fan of any cinema or webseries or any character? Visit our to
            purchase T-shirt, Mugs, Pillow on the theme of your choice
          </p>
          <button className="items-btn">Order Now</button>
        </div>
        <div className="items">
          <i class="uil uil-users-alt"></i>
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

export default Services;
