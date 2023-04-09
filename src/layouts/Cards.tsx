import { AppProps } from "next/app";
import React from "react";
import { Button } from "react-bootstrap";
interface image {
  url: string;
}
const Cards_Fashion = (props: image) => {
  return (
    <div id="card_fashion">
      <div className="card_content">
        <div className="card_hover">
          <div className="card_hover_item">
            <span className="material-symbols-outlined">favorite</span>
            <div className="item_tip">Add to wishlist</div>
          </div>

          <div className="card_hover_item">
            <span className="material-symbols-outlined">restart_alt</span>
            <div className="item_tip">Compare</div>
          </div>

          <div className="card_hover_item">
            <span className="material-symbols-outlined">search</span>
            <div className="item_tip">Quick view</div>
          </div>
        </div>

        <div className="card_img">
          <img src={props.url} />
        </div>

        <div className="card_info">
          <h6>Stretch Flare Dress</h6>
          <div className="rating">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>

          <div className="price">
            <p>
              <span className="me-3">Starts at</span>
              <span className="me-2 price_item">$18</span>
              {" - "}
              <span className="ms-2 price_item">$12</span>
            </p>
            <Button className="add_cart_btn w-100">
              <span className="material-symbols-outlined me-3">
                shopping_cart
              </span>
              <span className="txt_white">Add To Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards_Fashion;
