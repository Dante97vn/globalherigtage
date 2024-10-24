import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide container  p-0 "
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="8"
          aria-label="Slide 9"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="9"
          aria-label="Slide 10"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./img/dachinhsua/carousel-1.png"
            className="d-block w-100"
            alt="carousel-1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/dachinhsua/carousel-2.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/dachinhsua/carousel-3.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/dachinhsua/carousel-4.png"
            className="d-block w-100"
            alt="carousel-4"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/dachinhsua/carousel-5.png"
            className="d-block w-100"
            alt="carousel-5"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/dachinhsua/carousel-6.png"
            className="d-block w-100"
            alt="carousel-6"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/dachinhsua/carousel-7.png"
            className="d-block w-100"
            alt="carousel-7"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/dachinhsua/carousel-8.png"
            className="d-block w-100"
            alt="carousel-8"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/dachinhsua/carousel-9.png"
            className="d-block w-100"
            alt="carousel-9"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./img/dachinhsua/carousel-10.png"
            className="d-block w-100"
            alt="carousel-10"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
