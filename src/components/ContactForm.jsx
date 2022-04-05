import React, { useState } from 'react'
import "../styles/ContactForm.css"

const ContactForm = () => {

  const [ formData, setFormData ] = useState({
      name: "",
      email: "",
      message: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({
        ...prev,
        [name] : value
    }));
  };

  return (
    <div className="form-wrapper">
        <form className='contact' name='contact' action="post">
            <label className='contact-label' htmlFor="name">Add Name: </label>
            <input className='contact-input' type="text" name='name' placeholder='Name' value={formData.name} onChange={handleChange} />

            <label className='contact-label' htmlFor="email">Add Email: </label>
            <input className='contact-input' type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange} />

            <label className='contact-label' htmlFor="form-message">Add Message: </label>
            <textarea className='contact-input' name="message" id="form-message" cols="30" rows="10" placeholder='Add Message' value={formData.message} onChange={handleChange}></textarea>

            <input id='contact-submit-button' className='contact-input' type="submit" />
        </form>
    </div>
  )
}

export default ContactForm