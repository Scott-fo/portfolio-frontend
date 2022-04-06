import React, { useState } from 'react'
import axios from "axios";
import "../styles/ContactForm.css"

const ContactForm = () => {

  const [ formData, setFormData ] = useState({
      name: "",
      email: "",
      subject: "Contact from Portfolio",
      message: ""
  });

  const [ formSubmissionResponse, setFormSubmissionResponse ] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({
        ...prev,
        [name] : value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/submitform", { ...formData })
        .then((response) => {
          setFormSubmissionResponse(response.data);
          setFormData({
            name: "",
            email: "",
            subject: "Contact from Portfolio",
            message: ""
          });
        });
    } catch (err) {
      setFormSubmissionResponse({
        success: false,
        message: "Error. Try again Later"
      })
    }
  }

  return (
    <div className="form-wrapper">
        <form className='contact' name='contact' action="post" onSubmit={(e) => handleSubmit(e)}>
            {formSubmissionResponse && <p>{formSubmissionResponse.message}</p>}
            <label className='contact-label' htmlFor="name">Add Name: </label>
            <input className='contact-input' type="text" name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />

            <label className='contact-label' htmlFor="email">Add Email: </label>
            <input className='contact-input' type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />

            <label className='contact-label' htmlFor="form-message">Add Message: </label>
            <textarea className='contact-input' name="message" id="form-message" cols="30" rows="10" placeholder='Add Message' value={formData.message} onChange={handleChange} required ></textarea>

            <input id='contact-submit-button' className='contact-input' type="submit" />
        </form>
    </div>
  )
}

export default ContactForm