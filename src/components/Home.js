import React from "react";
import mobileImage from "../mobile-image.webp";
import cartImage from "../shopping-cart.png";
function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src={cartImage} />
      </div>
      <h1>Home Components</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={mobileImage} />
        </div>
        <div className="text-wrapper item">
          <span>I phone</span>
          <span>price: $100000</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
