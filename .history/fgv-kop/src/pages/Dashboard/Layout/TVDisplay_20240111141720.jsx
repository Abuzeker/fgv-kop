import React from "react";
import Slider from "react-slick";

const TVDisplay = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const CustomNextArrow = (props) => (
    <div
      className={props.className}
      style={{
        ...props.style,
        color: "red",
        fontSize: "24px",
        zIndex: 1,
        right: "20px", // Adjust the position as needed
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
      }}
      onClick={props.onClick}
    >
      Prev
    </div>
  );

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
          <div>asdasddgfsdg</div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default TVDisplay;
