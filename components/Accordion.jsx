import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div className="accordion__item">
      <div className="accordion__heading">
        <p className="accordion__question">{question}</p>
        <button
          className="accordion__btn"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {isOpen ? (
            <AiOutlineClose
              style={{
                color: "#222",
              }}
            />
          ) : (
            <FaAngleDown
              style={{
                color: "#222",
              }}
            />
          )}
        </button>
      </div>
      <div className="accordion__answer-box" style={style}>
        <p className="accordion__answer-text">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
