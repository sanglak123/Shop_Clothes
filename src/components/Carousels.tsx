import React from "react";
import { Carousel } from "react-bootstrap";

const Carousels = () => {
  return (
    <div id="carousels">
      <Carousel>
        <Carousel.Item id="first_item" className="carousel_item">
          <img
            className="d-block w-100"
            src="/img/banner/banner2.jpg"
            alt="First slide"
          />
          <Carousel.Caption id="first_item_caption">
            <div className="item_text">
              <p>Pretty Looks</p>
              <h3>50% OFF</h3>
              <p className="collection_name">Coat & Modern Jean</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                delectus veniam nisi qui reiciendis at excepturi voluptatum?
                Sint inventore praesentium at, corporis laborum assumenda magnam
                nesciunt rem tempora laboriosam, eos doloremque itaque? Libero,
                voluptates corrupti?
              </span>
            </div>
            <div className="item_btn mt-3">
              <button className="btn_white bsd">Shop Now</button>
              <button className="btn_over bsd">New Arrivas</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="first_item" className="carousel_item">
          <img
            className="d-block w-100"
            src="/img/banner/banner1.jpg"
            alt="First slide"
          />
          <Carousel.Caption id="first_item_caption">
            <div className="item_text">
              <p>Pretty Looks</p>
              <h3>50% OFF</h3>
              <p className="collection_name">Coat & Modern Jean</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                delectus veniam nisi qui reiciendis at excepturi voluptatum?
                Sint inventore praesentium at, corporis laborum assumenda magnam
                nesciunt rem tempora laboriosam, eos doloremque itaque? Libero,
                voluptates corrupti?
              </span>
            </div>
            <div className="item_btn mt-3">
              <button className="btn_white bsd">Shop Now</button>
              <button className="btn_over bsd">New Arrivas</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="first_item" className="carousel_item">
          <img
            className="d-block w-100"
            src="/img/banner/banner3.jpg"
            alt="First slide"
          />
          <Carousel.Caption id="first_item_caption">
            <div className="item_text">
              <p>Pretty Looks</p>
              <h3>50% OFF</h3>
              <p className="collection_name">Coat & Modern Jean</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                delectus veniam nisi qui reiciendis at excepturi voluptatum?
                Sint inventore praesentium at, corporis laborum assumenda magnam
                nesciunt rem tempora laboriosam, eos doloremque itaque? Libero,
                voluptates corrupti?
              </span>
            </div>
            <div className="item_btn mt-3">
              <button className="btn_white bsd">Shop Now</button>
              <button className="btn_over bsd">New Arrivas</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
