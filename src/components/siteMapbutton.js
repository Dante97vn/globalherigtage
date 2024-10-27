import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/SitemapButton.css"; // CSS cho lightbox format

function SitemapButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLightbox = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    toggleLightbox(); // Đóng lightbox sau khi nhấn vào link
  };

  return (
    <>
      <button
        className="btn btn-outline-dark sitemap-toggle-btn"
        onClick={toggleLightbox}
      >
        Sitemap
      </button>

      {isOpen && (
        <div className="lightbox-overlay" onClick={toggleLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn-close lightbox-close-btn"
              onClick={toggleLightbox}
            ></button>
            <ul className="sitemap-links">
              <li>
                <Link to="/home" onClick={scrollToTop}>
                  Homepage
                </Link>
              </li>
              <li>
                <Link to="/monuments" onClick={scrollToTop}>
                  Monuments
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={scrollToTop}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/feedback" onClick={scrollToTop}>
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/aboutus" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default SitemapButton;
