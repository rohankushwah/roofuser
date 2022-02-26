import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../style.css";


const Enquiry = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ec4z3ga",
        "template_wfckgm8",
        e.target,
        "user_Qp82fnjO57XMqHgqlS0o2",
        {
          user_email: "rohankushwahcse15@acropolis.in",
        }
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex-column align-center"
      >
        <div className="flex">
          <label>Name : </label>
          <input type="text" name="from_email" className="mb-10 ml-5 " />
        </div>
        <div className="flex">
          <label>Email : </label>
          <input type="email" name="to_email" className="mb-10 ml-5" />
        </div>
        <div className="flex">
          <label>Message : </label>
          <textarea name="message" className="mb-10 ml-5" />
        </div>
        <input type="submit" value="Send" className="width-100" />
      </form>
          </div>
  );
};

export default Enquiry;
