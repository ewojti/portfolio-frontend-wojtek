import React, { useState } from "react";
import "./ContactModal.scss";

export default function ContactModal({ isOpen, handleCloseModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formStatus, setFormStatus] = React.useState("Send");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    isOpen && (
      <div className="app__modal">
        <div onClick={handleCloseModal} className="modal-overlay"></div>
        <div className="app__modal-content">
          <h2>Connect with me</h2>
          <form onSubmit={handleSubmit} className="app__modal-content-form">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <textarea
              id="message"
              name="message"
              value={message}
              placeholder="message"
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>

            <button type="submit" className="app__modal-button">
              Wyślij
            </button>
          </form>
          {/* <button
            className="app__modal-button modal-close"
            onClick={handleCloseModal}
          >
            Zamknij
          </button> */}
        </div>
      </div>
    )
  );
}
