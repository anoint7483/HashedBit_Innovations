import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/success', { state: { ...form, bookingId: Math.floor(100000 + Math.random() * 900000) } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>Book Your Seat</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="mobile" type="tel" placeholder="Mobile" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
