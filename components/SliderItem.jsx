import React from "react";
import Image from "next/image";
const SliderItem = ({ src, title }) => {
  return (
    <div className="slider__item">
      <Image
        src={src}
        width={270}
        height={355}
        alt={title ? title : "slider image"}
        placeholder="blur"
        blurDataURL={src}
      />
    </div>
  );
};

export default SliderItem;
