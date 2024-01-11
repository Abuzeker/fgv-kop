import React from "react";
import Slider from "react-slick";
import './tvcss.css'

const TVDisplay = () => {
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`} >
            <div class="arrows" style={{color:"white"}}/>
          </div>
        )
        }
  
   function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`} >
            <div class="arrows" style={{color:"white"}}/>
          </div>
        )
      }

      var settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        className:"slides",
        nextArrow: <SampleNextArrow to="next"/>,
        prevArrow: <SamplePrevArrow to="prev" />,
      }
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
