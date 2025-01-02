import "./ContactFormStyle.css";
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const BASEURL = process.env.REACT_APP_API_URL;
// console.log(BASEURL);

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(BASEURL + "/tour-travels/send-message", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        if (result) {
          console.log(result?.data?.message);
          toast.success(result?.data?.message);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      })
      .catch((error) => {
        // console.log(error);
        toast.error(error?.response?.data?.message);
      });
  };

  return (
    <div className="form-container">
      <h1>Send a message to us</h1>
      <form onSubmit={handleSubmit}>
        <ToastContainer position="top-center" autoClose={3000} />
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData?.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData?.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData?.subject}
          onChange={handleChange}
        />
        <textarea
          placeholder="Message"
          name="message"
          rows="4"
          value={formData?.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contactform;
