import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Feed_Back = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div id="feed_back" className="w-80 mt-5 mb-5">
      <h1>What they{"’"}re saying</h1>
      <Slider {...settings}>
        <div className="feed_back_item">
          <div className="avatar">
            <img alt="user" />
          </div>
          <div className="feed_back_text">
            <i className="fa fa-quote-left me-3"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            dolores odio qui beatae accusamus perferendis sapiente praesentium,
            dignissimos delectus rerum autem debitis eligendi maiores tempora
            quibusdam adipisci dicta laboriosam tempore quisquam et commodi!
            Error aspernatur provident repellat sit ullam mollitia.
            <i className="fa fa-quote-right ms-3"></i>
          </div>
          <div className="feed_back_user">
            <h6>Join.h</h6>
            <span>Designer</span>
          </div>
        </div>

        <div className="feed_back_item">
          <div className="avatar">
            <img alt="user" />
          </div>
          <div className="feed_back_text">
            <i className="fa fa-quote-left me-3"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            dolores odio qui beatae accusamus perferendis sapiente praesentium,
            dignissimos delectus rerum autem debitis eligendi maiores tempora
            quibusdam adipisci dicta laboriosam tempore quisquam et commodi!
            Error aspernatur provident repellat sit ullam mollitia.
            <i className="fa fa-quote-right ms-3"></i>
          </div>
          <div className="feed_back_user">
            <h6>Join.h</h6>
            <span>Designer</span>
          </div>
        </div>

        <div className="feed_back_item">
          <div className="avatar">
            <img alt="user" />
          </div>
          <div className="feed_back_text">
            <i className="fa fa-quote-left me-3"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            dolores odio qui beatae accusamus perferendis sapiente praesentium,
            dignissimos delectus rerum autem debitis eligendi maiores tempora
            quibusdam adipisci dicta laboriosam tempore quisquam et commodi!
            Error aspernatur provident repellat sit ullam mollitia.
            <i className="fa fa-quote-right ms-3"></i>
          </div>
          <div className="feed_back_user">
            <h6>Join.h</h6>
            <span>Designer</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Feed_Back;
