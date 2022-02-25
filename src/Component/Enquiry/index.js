import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
        // "user_Qp82fnjO57XMqHgqlS0o2"
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
      <h1>Data is here</h1>  
        {console.log('console at here')}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_email" />
        <label>Email</label>
        <input type="email" name="to_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Enquiry;
