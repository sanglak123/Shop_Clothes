import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Brands = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div id="brands_slide" className="w-80 mt-5 mb-5">
      <h1>Brands</h1>
      <Slider {...settings}>
        <div className="brands_item">
          <div className="logo">
            <img src="/img/brands/7.jpg" alt="user" />
          </div>
        </div>
        <div className="brands_item">
          <div className="logo">
            <img src="/img/brands/8.jpg" alt="user" />
          </div>
        </div>
        <div className="brands_item">
          <div className="logo">
            <img src="/img/brands/1.jpg" alt="user" />
          </div>
        </div>
        <div className="brands_item">
          <div className="logo">
            <img src="/img/brands/2.jpg" alt="user" />
          </div>
        </div>
        <div className="brands_item">
          <div className="logo">
            <img src="/img/brands/3.jpg" alt="user" />
          </div>
        </div>
        <div className="brands_item">
          <div className="logo">
            <img src="/img/brands/4.jpg" alt="user" />
          </div>
        </div>
        <div className="brands_item">
          <div className="logo">
            <img src="/img/brands/5.jpg" alt="user" />
          </div>
        </div>
        <div className="brands_item">
          <div className="logo">
            <img src="/img/brands/6.jpg" alt="user" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Brands;
