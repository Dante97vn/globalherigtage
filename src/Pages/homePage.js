import React from "react";

import Carousel from "../components/carousel.js";

function Home() {
  return (
    <main className="">
      <Carousel />
      <h1 className="text-center fontStyleClassic bg-info container">
        Introduction
      </h1>
      <h4 className="container">
        Welcome to Global Heritage: Explore the World's Historic Monuments!
      </h4>
      <p className="container">
        {" "}
        We are an online platform designed to help you discover and learn about
        the most iconic historical landmarks around the globe. Our mission is to
        inspire, educate, and connect people with the rich cultural and
        historical wealth of our planet.
      </p>
      <h2 className="container">Why Global Heritage?</h2>
      <p className="container">
        {" "}
        The world is filled with stories hidden within each historical monument.
        From architectural wonders to culturally significant sites, we provide
        detailed information, stunning images, and references about these
        landmarks, making it easy for you to explore and appreciate them.
      </p>

      <h2 className="container">Discover the Monuments Explore by Region:</h2>
      <div className="container">
        <ul>
          <li className="">
            <strong>Explore by Region: </strong>
            Learn about monuments categorized by geographical zones such as
            East, West, North, and South.
          </li>
          <li className="">
            <strong>Photo Gallery: </strong>
            Admire breathtaking images of various historical monuments.
          </li>
          <li className="">
            <strong>In-Depth Information: </strong>Each monument is accompanied
            by a historical description and links to additional resources for
            deeper understanding.
          </li>
        </ul>
      </div>
      <p className="container">
        We hope our platform serves as a source of inspiration for those
        passionate about history and culture. Let’s embark on a journey to
        explore the beauty of global heritage together!
      </p>
      <h1 className="text-center fontStyleClassic bg-info container">
        Our Partner
      </h1>
      <img
        src="./img/partner.png"
        className="height200 d-block w-100 container"
        alt="..."
      />
    </main>
  );
}

export default Home;
