function Contact() {
  return (
    <main className="">
      {/*Information about school*/}

      <h2 className="backgroundcustom2 text-center container">
        CONTACT INFORMATION GLOBAL HERITAGE
      </h2>
      <div className="container backgroundcustom1">
        <p>
          <strong>Address:</strong> 590 CMT8, P.11, Q.3, Tp HCM
        </p>
        <p>
          <strong>Hotline:</strong> 090 958 9097 | 0869 888 059
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:quocdatvan97@gmail.com">quocdatvan97@gmail.com</a>
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a href="https://dante97vn.github.io/globalherigtage/">
            {" "}
            https://dante97vn.github.io/globalherigtage/
          </a>
        </p>
      </div>

      {/*Map*/}
      <div className="container backgroundcustom1">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.324078643999!2d106.66363827457502!3d10.786471959009287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752feb31e24595%3A0xb3d6bce53f82a7c9!2sFPT%20Aptech!5e0!3m2!1svi!2s!4v1728736374329!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/*Introduce member*/}
      <div className="fontStyleClassic  ">
        <h1 className="text-center fontStyleClassic backgroundcustom2 container">
          Introduce Team
        </h1>
        <div className="container text-center  backgroundcustom1">
          <div className="row align-items-start">
            <div className="col">
              <img
                src="./img/avatar/nam.png"
                alt="Logo"
                className="img-fluid d-inline-block"
                style={{ maxWidth: "150px" }}
              />
              <p>Pham Hoai Nam</p>
              <p>StudentID: Student1575502</p>
            </div>
            <div className="col">
              <img
                src="./img/avatar/dat.png"
                alt="Logo"
                className="img-fluid d-inline-block"
                style={{ maxWidth: "150px" }}
              />
              <p>Van Quang Quoc Dat</p>
              <p>StudentID: Student1575498</p>
            </div>
            <div className="col">
              <img
                src="./img/avatar/truong.png"
                alt="Logo"
                className="img-fluid d-inline-block"
                style={{ maxWidth: "150px" }}
              />
              <p>Nguyen Quang Truong</p>
              <p>StudentID: Student1581406</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
