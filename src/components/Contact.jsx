import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 ">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
      <div className="text-center tracking-tighter">
        <p>{CONTACT.phoneNo}</p>
        <a href={CONTACT.linkedIn}>LinkedIn</a>
        <br></br>
        <a href={`mailto: ${CONTACT.email}`}>{CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contact;
