import React, { useState } from "react";
import "./ContactModal.scss";

export default function ContactModal({ isOpen, handleCloseModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    isOpen && (
      <div className="app__modal">
        <div onClick={handleCloseModal} className="modal-overlay"></div>
        <div className="app__modal-content">
          <h2>Connect with me</h2>
          <form onSubmit={handleSubmit} className="app__modal-content-form">
            <label htmlFor="name">Imię:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <label htmlFor="email">E-mail wysyłającego:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="message">Wiadomość:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>

            <button type="submit">Wyślij</button>
          </form>
          <button
            className="app__modal-button modal-close"
            onClick={handleCloseModal}
          >
            Zamknij
          </button>
        </div>
      </div>
    )
  );
}
