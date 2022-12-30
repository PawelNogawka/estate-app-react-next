import React, { useRef, useState } from "react";

import SliderItem from "./SliderItem";
const Slider = ({ photos }) => {
  const [scroll, setScroll] = useState(false);
  const [cursor, setCursor] = useState("grab");
  const [progress, setProgress] = useState(0);

  const sliderContainer = useRef(null);

  const getScrollProcent = () => {
    return (
      (sliderContainer.current.scrollLeft /
        (sliderContainer.current.scrollWidth -
          sliderContainer.current.clientWidth)) *
        100 +
      "%"
    );
  };

  const handleOnMounseDown = () => {
    setScroll(true);
    setCursor("grabbing");
  };

  const handleOnMounseUp = () => {
    setScroll(false);
    setCursor("grab");
  };

  const handleOnMounseLeave = () => {
    setScroll(false);
    setCursor("grab");
  };
  const handleOnMouseMove = (e) => {
    if (scroll) {
      sliderContainer.current.scrollLeft -= e.movementX;
      setProgress(getScrollProcent());
    }
  };

  return (
    <div className="slider">
      <div
        ref={sliderContainer}
        style={{ cursor: cursor }}
        className="slider__container"
      >
        <div
          className="slider__inner"
          onMouseDown={handleOnMounseDown}
          onMouseUp={handleOnMounseUp}
          onMouseLeave={handleOnMounseLeave}
          onMouseMove={handleOnMouseMove}
        >
          {photos.map((photo) => (
            <SliderItem  src={photo.url} title={photo.title} key={photos.id} />
          ))}
        </div>
      </div>
      <div className="slider__scrollbar-outer">
        <div
          className="slider__scrollbar-inner"
          style={{ width: progress }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
