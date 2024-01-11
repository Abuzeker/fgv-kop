import React from "react";
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

const TVDisplay = () => {
  const CustomNextArrow = (props) => (
    <div
      className={props.className}
      style={{
        ...props.style,
        color: "red",
        fontSize: "24px",
        zIndex: 1,
        right: "20px", // Adjust the position as needed
        background: "lightgray", // Added background color for visibility
      }}
      onClick={props.onClick}
    >
      Next
    </div>
  );

  const CustomPrevArrow = (props) => (
    <div
      className={props.className}
      style={{
        ...props.style,
        color: "red",
        fontSize: "24px",
        zIndex: 1,
        left: "20px", // Adjust the position as needed
        background: "lightgray", // Added background color for visibility
      }}
      onClick={props.onClick}
    >
      Prev
    </div>
  );

  const settings = {
    dots: true,
    slidesToShow: 1,
    fade: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    infinite: false, // Disable infinite loop
  };

  return (
    <div>
      <Slider {...settings}>
        {/* Each div is a separate slide */}
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
