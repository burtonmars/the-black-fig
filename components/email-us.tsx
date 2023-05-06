import React, { useState } from 'react';

import styles from '../styles/email-us/Email-us.module.css';

function EmailUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData); // Do something with the form data
  };

  return (
    <div className={styles.emailUs__formContainer}>
      <h1>
        Send us an Email
      </h1>
      <form className={styles.emailUs__form} onSubmit={handleSubmit}>
        <div className={styles.emailUs__nameContainer}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.emailUs__emailContainer}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.emailUs__messageContainer}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.emailUs__submitContainer}>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default EmailUs;
