import React from "react";
import "./Contact.css";
import { Picture } from "../../assets/Picture";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4006306b-a6e9-490d-b559-4829bd09c400");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={Picture.msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={Picture.mail_icon} alt="" />
            Hungmika000@gmail.com
          </li>
          <li>
            <img src={Picture.phone_icon} alt="" />
            0702950***
          </li>
          <li>
            <img src={Picture.location_icon} alt="" />
            69/69/69 ,TP.HCM, VietNam
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          {/* <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          /> */}
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message ..."
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={Picture.white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
