// src/components/Gallery.js
import React, { useState, useEffect } from "react";
import "./css/gallery.css";

const Gallerypic = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [visibleImages, setVisibleImages] = useState(9); // 3 rows of 3 images

  useEffect(() => {
    fetch("./data/galleryImages.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        const allImages = [];

        // Combine all images from JSON into a single array
        for (const direction in data.directions) {
          data.directions[direction].forEach((place) => {
            allImages.push({ src: `images/${place.img}`, name: place.name });
            place.thumbnails.forEach((thumb) =>
              allImages.push({ src: `images/${thumb}`, name: place.name })
            );
          });
        }
        data.wonders.forEach((wonder) => {
          allImages.push({ src: `images/${wonder.img}`, name: wonder.name });
          wonder.thumbnails.forEach((thumb) =>
            allImages.push({ src: `images/${thumb}`, name: wonder.name })
          );
        });

        // Shuffle images for random order
        setGalleryData(allImages.sort(() => Math.random() - 0.5));
      })
      .catch((error) => console.error("Error fetching gallery data:", error));
  }, []);

  const openLightbox = (image) => {
    setLightboxImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setLightboxImage("");
  };

  const handleViewMore = () => {
    setVisibleImages(visibleImages + 9); // Show 3 more rows (9 images) on each click
  };

  return (
    <section className="gallery">
      <h2>Photo Album</h2>
      <div className="grid">
        {galleryData.slice(0, visibleImages).map((image, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => openLightbox(image.src)}
          >
            <img src={image.src} alt={image.name} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visibleImages < galleryData.length && (
        <button className="view-more-btn" onClick={handleViewMore}>
          View More
        </button>
      )}

      {/* Lightbox for larger image view */}
      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>
          <img className="lightbox-image" src={lightboxImage} alt="Selected" />
        </div>
      )}
    </section>
  );
};

export default Gallerypic;
