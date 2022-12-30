import React from "react";

import Accordion from "../components/Accordion";

import Image from "next/image";

import FaqImg from "../asstes/faq.png";

const faqData = [
  {
    question: "In a website browser address bar, what does “www” stand for?",
    answer: "World Wide Web",
  },
  {
    question: "What is the name of the artist who painted Mona Lisa?",
    answer: "World Wide Web",
  },
  {
    question: "What is the capital of Brazil?",
    answer: "World Wide Web",
  },
  {
    question: "What temperature does water boil at?",
    answer: "World Wide Web",
  },
];

const Faq = () => {
  return (
    <section className="faq section-padding">
      <h2 className="section__heading">
        Below you will find answers to the most frequently asked questions by
        users
      </h2>
      <div className="faq__container">
        <div className="faq__img-box">
          <Image
            className="faq__img"
            src={FaqImg}
            alt="faq image"
            width={300}
            height={200}
          />
        </div>
        <div className="accordion">
          {faqData.map((item) => (
            <Accordion
              question={item.question}
              answer={item.answer}
              key={item.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
