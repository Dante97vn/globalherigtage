import React, { useState, useEffect, useRef } from "react";
import "./css/monumentSection.css";

const Monumentsc = () => {
  const [galleryData, setGalleryData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("wonders"); // Set default to "wonders"
  const [selectedWonder, setSelectedWonder] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedDirection, setSelectedDirection] = useState("");

  const detailsRef = useRef(null); // Create a ref for the details section

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch("./data/monuments.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setGalleryData({ directions: {}, wonders: [] });
      }
    };

    fetchGalleryData();
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setSelectedWonder(null);
    setSelectedPlace(null);
    setSelectedDirection("");
  };

  const handleWonderClick = (wonder) => {
    setSelectedWonder(wonder);
    setTimeout(scrollToDetails, 100); // Delay scroll b
  };

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setTimeout(scrollToDetails, 100); // Delay scroll
  };

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDirectionChange = (direction) => {
    setSelectedDirection(direction);
    setSelectedPlace(null);
  };

  if (!galleryData) {
    return (
      <div className="text-center">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section className="container mt-5">
      {/* Option buttons */}
      <div className="row mb-4">
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

      {/* Famous Places Around the World */}
      {selectedOption === "world" && (
        <>
          {/* Direction Filter Buttons */}
          <div className="mb-4">
            <span className="me-3">Choose a Direction:</span>
            {["East", "North", "South", "West"].map((direction) => (
              <button
                key={direction}
                className={`btn btn-outline-primary me-2 ${
                  selectedDirection === direction ? "active" : ""
                }`}
                onClick={() => handleDirectionChange(direction)}
              >
                {direction}
              </button>
            ))}
            {/* Button to show all places */}
            <button
              className={`btn btn-outline-secondary me-2 ${
                !selectedDirection ? "active" : ""
              }`}
              onClick={() => handleDirectionChange("")}
            >
              All
            </button>
          </div>

          <div className="row">
            {(selectedDirection
              ? galleryData.directions[selectedDirection] || []
              : Object.values(galleryData.directions).flat()
            ).map((place) => (
              <div key={place.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src={`images/${place.img}`}
                    className="card-img-top"
                    alt={place.name}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="card-text text-truncate">
                      {place.briefHistory.length > 100
                        ? `${place.briefHistory.slice(0, 100)}...`
                        : place.briefHistory}
                    </p>
                    <button
                      className="btn btn-primary mt-auto"
                      onClick={() => handlePlaceClick(place)}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedPlace && (
            <div ref={detailsRef} className="mt-5">
              <h2 className="text-center bg-info">{selectedPlace.name}</h2>
              <h3 className="text-center bg-info">Brief History</h3>
              <p>{selectedPlace.briefHistory}</p>
              <h3 className="text-center bg-info">Description</h3>
              <p>{selectedPlace.fullDescription}</p>

              {/* Display Google Map for the selected place */}
              <div className="map-container mb-4">
                <h4 className="text-center bg-info">Location:</h4>
                <iframe
                  src={selectedPlace.iframeSrc}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={selectedPlace.name}
                />
              </div>
            </div>
          )}
        </>
      )}

      {/* 7 Wonders of the World */}
      {selectedOption === "wonders" && (
        <>
          <div className="row">
            {galleryData.wonders &&
              galleryData.wonders.map((wonder) => (
                <div
                  key={wonder.id}
                  className="col-lg-4 col-md-6 col-sm-12 mb-4"
                >
                  <div className="card h-100">
                    <img
                      src={`images/${wonder.img}`}
                      className="card-img-top"
                      alt={wonder.name}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{wonder.name}</h5>
                      <p className="card-text text-truncate">
                        {wonder.briefHistory.length > 100
                          ? `${wonder.briefHistory.slice(0, 100)}...`
                          : wonder.briefHistory}
                      </p>
                      <button
                        className="btn btn-primary mt-auto"
                        onClick={() => handleWonderClick(wonder)}
                      >
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {selectedWonder && (
            <div ref={detailsRef} className="mt-5 details">
              <h2 className="text-center bg-info">{selectedWonder.name}</h2>
              <h3 className="text-center bg-info">Brief History</h3>
              <p>{selectedWonder.briefHistory}</p>
              <h3 className="text-center bg-info">Description</h3>
              <p>{selectedWonder.fullDescription}</p>
              {/* Display Google Map for the selected wonder */}
              <div className="map-container mb-4">
                <h4>Location:</h4>
                <iframe
                  src={selectedWonder.iframeSrc}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={selectedWonder.name}
                />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Monumentsc;
