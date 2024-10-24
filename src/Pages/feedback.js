import React from "react";
import Swal from "sweetalert2";

import "../components/css/feedback.css";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "86784206-a4c1-4a4b-a64c-6d04cd64a071");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message send successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div className="">
      <section className="contact container">
        <form onSubmit={onSubmit}>
          <h2>Feedback Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              name="message"
              className="field mess"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
