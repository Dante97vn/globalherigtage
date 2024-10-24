import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap 5
import "./css/gallery.css"; // Your custom styles

const Gallerypic = () => {
  const [galleryData, setGalleryData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("wonders"); // Default to "7 Wonders"
  const [selectedRegion, setSelectedRegion] = useState(""); // East, South, North, West
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedWonder, setSelectedWonder] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [showDirections, setShowDirections] = useState(false);

  // Ref for the thumbnails section
  const thumbnailRef = useRef(null);

  useEffect(() => {
    fetch("./data/galleryImages.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setGalleryData(data);
      })
      .catch((error) => {
        console.error("Error fetching gallery data:", error);
        setGalleryData({ directions: {}, wonders: [] });
      });
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setSelectedRegion("");
    setSelectedPlace(null);
    setSelectedWonder(null);
    setShowDirections(option === "world");
  };

  const handleRegionChange = (direction) => {
    setSelectedRegion(direction);
    setSelectedPlace(null);
  };

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setSelectedWonder(null);

    // Scroll to the thumbnails section after selecting a place
    setTimeout(() => {
      if (thumbnailRef.current) {
        thumbnailRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay slight scrolling for better UX
  };

  const handleWonderClick = (wonder) => {
    setSelectedWonder(wonder);
    setSelectedRegion("");
    setSelectedPlace(null);

    // Scroll to the thumbnails section after selecting a wonder
    setTimeout(() => {
      if (thumbnailRef.current) {
        thumbnailRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay slight scrolling for better UX
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setLightboxImage("");
  };

  if (!galleryData) {
    return <div>Loading...</div>;
  }

  // Collect all places in directions if no specific region is selected
  const allPlaces = selectedRegion
    ? galleryData.directions[selectedRegion]
    : Object.values(galleryData.directions).flat();

  return (
    <section className="gallery container">
      <div className="row mb-4">
        {/* Famous Places Around the World Button */}
        <div className="col-auto">
          <button
            className={`btn btn-primary ${
              selectedOption === "world" ? "active" : ""
            }`}
            onClick={() => handleOptionChange("world")}
          >
            Famous Places Around the World
          </button>
        </div>

        {/* 7 Wonders of the World Button */}
        <div className="col-auto">
          <button
            className={`btn btn-secondary ${
              selectedOption === "wonders" ? "active" : ""
            }`}
            onClick={() => handleOptionChange("wonders")}
          >
            7 Wonders of the World
          </button>
        </div>
      </div>

      {/* Display Direction Buttons */}
      {showDirections && (
        <div className="row mb-4">
          <div className="col-auto">
            <button
              className={`btn btn-info ${
                selectedRegion === "East" ? "active" : ""
              }`}
              onClick={() => handleRegionChange("East")}
            >
              East
            </button>
          </div>
          <div className="col-auto">
            <button
              className={`btn btn-info ${
                selectedRegion === "South" ? "active" : ""
              }`}
              onClick={() => handleRegionChange("South")}
            >
              South
            </button>
          </div>
          <div className="col-auto">
            <button
              className={`btn btn-info ${
                selectedRegion === "North" ? "active" : ""
              }`}
              onClick={() => handleRegionChange("North")}
            >
              North
            </button>
          </div>
          <div className="col-auto">
            <button
              className={`btn btn-info ${
                selectedRegion === "West" ? "active" : ""
              }`}
              onClick={() => handleRegionChange("West")}
            >
              West
            </button>
          </div>
        </div>
      )}

      {/* Display Places Based on Selected Region or All */}
      {selectedOption === "world" && (
        <div className="places">
          <h3>{selectedRegion || "All Directions"}</h3>
          <div className="row">
            {allPlaces.map((place) => (
              <div
                key={place.id}
                className=" col-md-4"
                onClick={() => handlePlaceClick(place)}
              >
                <div className=" point card mb-3">
                  <img
                    src={`images/${place.img}`}
                    className="card-img-top"
                    alt={place.name}
                  />
                  <div className="card-body">
                    <p className="card-text">{place.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Thumbnails Section */}
      {selectedPlace && (
        <div className="thumbnails" ref={thumbnailRef}>
          <h3>{selectedPlace.name}</h3>
          <div className="row">
            {selectedPlace.thumbnails.map((thumb, index) => (
              <div key={index} className="col-md-4">
                <div className=" zoom card mb-3">
                  <img
                    src={`images/${thumb}`}
                    className="card-img-top"
                    alt={`${selectedPlace.name} ${index + 1}`}
                    onClick={() => openLightbox(`images/${thumb}`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Wonders of the World Section */}
      {selectedOption === "wonders" && (
        <div className="wonders">
          <h3>7 Wonders of the World</h3>
          <div className="row">
            {galleryData.wonders &&
              galleryData.wonders.map((wonder) => (
                <div
                  key={wonder.id}
                  className="col-md-4"
                  onClick={() => handleWonderClick(wonder)}
                >
                  <div className="point card mb-3">
                    <img
                      src={`images/${wonder.img}`}
                      className="card-img-top"
                      alt={wonder.name}
                    />
                    <div className="card-body">
                      <p className="card-text">{wonder.name}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {selectedWonder && (
            <div className="thumbnails" ref={thumbnailRef}>
              <h3>{selectedWonder.name}</h3>
              <div className="row">
                {selectedWonder.thumbnails.map((thumb, index) => (
                  <div key={index} className="col-md-4">
                    <div className="zoom card mb-3">
                      <img
                        src={`images/${thumb}`}
                        className="card-img-top"
                        alt={`${selectedWonder.name} ${index + 1}`}
                        onClick={() => openLightbox(`images/${thumb}`)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-backdrop" />
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
