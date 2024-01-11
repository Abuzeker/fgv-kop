import React from "react";
import Slider from "react-slick";

const TVDisplay = () => {
  // Custom arrow components
  const CustomNextArrow = (props) => (
    <div
      className={props.className}
      style={{ ...props.style, color: "red", fontSize: "24px" }}
      onClick={props.onClick}
    >
      Next
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
      className={props.className}
      style={{ ...props.style, color: "red", fontSize: "24px" }}
      onClick={props.onClick}
    >
      Prev
    </div>
  );

  const settings = {
    dots: true,
    slidesToShow: 1,
    fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {/* Your slides go here */}
        <div>
          <h3>1</h3>
          <div>asdasd</div>
        </div>
        <div>
          <h3>2</h3>
          <div>asdasd</div>
        </div>
        <div>
          <h3>3</h3>
          <div>3</div>
        </div>
        <div>
          <h3>4</h3>
          <div>4</div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default TVDisplay;
