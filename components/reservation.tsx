import React, { useState } from 'react';

import styles from '../styles/reservation/Reservation.module.css';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
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
    <div className={styles.reservation__formContainer}>
      <h1>
        Make a Reservation
      </h1>
      <form className={styles.reservation__form} onSubmit={handleSubmit}>
        <div className={styles.reservation__nameContainer}>
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
        <div className={styles.reservation__phoneContainer}>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.reservation__emailContainer}>
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
        <div className={styles.reservation__dateContainer}>
          <label htmlFor="date">Date of reservation:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.reservation__timeContainer}>
          <label htmlFor="time">Time of reservation:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            step="1800"
            min="15:00" 
            max="22:00"
            required
          />
        </div>
        <div className={styles.reservation__numGuestsContainer}>
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.reservation__submitContainer}>
          <button type="submit">Reserve</button>
        </div>
      </form>
    </div>
  );
}

export default Reservation;
