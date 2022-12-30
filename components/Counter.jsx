import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [enter, setEnter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setEnter((enter) => true)}
      onExit={() => setEnter((enter) => false)}
    >
      <div className="counter">
        <h2 className="section__heading">
          Forming strong and trusted connections with our clients
        </h2>
        <div className="counter__container">
          <div className="counter__tile">
            <p className="counter__amount">
              {enter && <CountUp start={0} end={2000} duration={3} />}
            </p>
            <p className="counter__name">purposes for rent</p>
          </div>
          <div className="counter__tile">
            <p className="counter__amount">
              {enter && <CountUp start={0} end={1000} duration={3} />}
            </p>
            <p className="counter__name">purposes for buy</p>
          </div>
          <div className="counter__tile">
            <p className="counter__amount">
              {enter && <CountUp start={0} end={5000} duration={3} />}
            </p>
            <p className="counter__name">happy clients</p>
          </div>
          <div className="counter__tile">
            <p className="counter__amount">
              {enter && <CountUp start={0} end={20} duration={3} />}
            </p>
            <p className="counter__name">lands</p>
          </div>
        </div>
        <p className="counter__info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          porro omnis recusandae ipsum quae asperiores sit exercitationem
          obcaecati dolore alias nihil, nisi facere vero quod sed qui, neque
          cupiditate. Fugit!
        </p>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
