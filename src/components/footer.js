function Footer() {
  return (
    <footer className="backgroundcustom2 py-3 container d-flex flex-column align-items-center text-center text-white">
      <div className="">
        <h1>Welcome to Global Heritage</h1>
        <p>Global Heritage: Explore the World's Historic Monuments</p>
      </div>
      {/* Logo bên dưới và ở giữa */}
      <div className="">
        <img
          src="./img/logo.png"
          alt="Logo"
          className="img-fluid d-inline-block"
          style={{ maxWidth: "90px" }}
        />
      </div>
      <div className="container text-center fontStyleClassic fs-5 ">
        <div className="row align-items-start">
          <div className="col">Client Support</div>
          <div className="col" id="about">
            About us
          </div>
        </div>
      </div>
      <div className="container text-center  fontStyleClassic fs-6 fw-lighter ">
        <div className="row align-items-start">
          <div className="col">Hotline: 090 958 9097</div>
          <div className="col text-start ">
            Welcome to{" "}
            <strong>
              Global Heritage: Explore the World's Historic Monuments
            </strong>
            , your ultimate digital gateway to the world’s most iconic
            historical landmarks. Our mission is to inspire, educate, and
            connect people with the cultural and historical wealth of our
            planet.
          </div>
        </div>
      </div>
      <div className="text-center pt-3">
        <p>&copy; 2024 Global Heritage-All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
