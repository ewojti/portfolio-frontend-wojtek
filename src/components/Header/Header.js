import React, { useState, useEffect } from "react";
import ContactModal from "./ContactModal";
import images from "../../constants/images";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [isOpen]);

  return (
    <div className="app__header section__padding">
      <div className="app__header-text">
        <h3 className="slide-in-fwd-center">🖐 Hello, my name is</h3>
        <h1 className="slide-in-fwd-center-sec">Wojtek.</h1>
        <h1 className="slide-in-fwd-center-third">
          I ASPIRE TO MY FIRST JOB AS A FRONTEND DEVELOPER
        </h1>
        <p className="app__header-description slide-in-bottom">
          PASSIONATE JUNIOR DEVELOPER WITH A DESIRE TO LEARN AND GROW SEEKS
          OPPORTUNITIES TO CONTRIBUTE TO DYNAMIC AND INNOVATIVE DEVELOPMENT
          PROJECTS.
        </p>
        <button
          className="app__header-text-button slide-in-bottom-sec"
          onClick={handleOpenModal}
        >
          <p>Get in touch</p>
        </button>
      </div>
      <div className="app__header-photo text-focus-in">
        <img src={images.portfolio} alt="portfolio" />
      </div>
      <ContactModal handleCloseModal={handleCloseModal} isOpen={isOpen} />
    </div>
  );
};

export default Header;
