import React, { useState } from "react";
import InputBox from "../components/InputBox";
const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    area: "",
  });

  const elements = [
    {
      id: 1,
      input: true,
      label: "Name:",
      name: "name",
      type: "text",
      placeholder: "Enter your name",
      className: "form__input",
      required: true,
      pattern: "^[A-Za-z]{3,}$",
      error:
        "The name should contains only letters and consist of at least 3 characters",
    },
    {
      id: 2,
      input: true,
      label: "Email:",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      className: "form__input",
      required: true,
      pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
      error: "Please enter correct email value.",
    },
    {
      id: 3,
      input: true,
      label: "Phone number:",
      name: "phone",
      type: "number",
      placeholder: "Enter your phone number",
      className: "form__input",
      required: true,
      pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
      error: "Phone number should contains only numbers",
    },
    {
      id: 4,
      input: true,
      label: "Topic:",
      name: "topic",
      type: "text",
      placeholder: "Enter your topic",
      className: "form__input",
      required: true,
      pattern: "^[A-Za-z0-9_-]{3,}$",
      error: "Topic should contains at least 3 characters",
    },
    {
      id: 5,
      input: false,
      label: "Message:",
      name: "area",
      placeholder: "Enter your message",
      className: "form__area",
      required: true,
      pattern: " /^[a-z]{2,10}$/",
      error: "Please enter correct message",
    },
  ];

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <section className="contact section-padding">
      <h2 className="section__heading">contact us for more information</h2>
      <form className="form">
        <div className="form__inputs-container">
          {elements.map((element) => (
            <InputBox
              key={element.id}
              element={element}
              onChange={onChange}
              value={values[element.name]}
            />
          ))}
        </div>
        <button className="form__btn">send message</button>
      </form>
    </section>
  );
};

export default Contact;
