
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../Services/api';

const CreateEvent = () => {
  const [event, setEvent] = useState({ name: '', description: '', date: '', location: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
    setFormSubmitted(false); // Reset the success message when the form is modified
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent(event);
    setFormSubmitted(true); // Set success message after form submission
   navigate('/allevents');
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Add Event</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input 
          type="text" 
          name="name" 
          placeholder="Event Name" 
          value={event.name} 
          onChange={handleChange} 
          required 
          style={inputStyle}
        />
        <input 
          type="text" 
          name="description" 
          placeholder="Description" 
          value={event.description} 
          onChange={handleChange} 
          required 
          style={inputStyle}
        />
        <input 
          type="date" 
          name="date" 
          placeholder="Date" 
          value={event.date} 
          onChange={handleChange} 
          required 
          style={inputStyle}
        />
        <input 
          type="text" 
          name="location" 
          placeholder="Location" 
          value={event.location} 
          onChange={handleChange} 
          required 
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Save Event</button>
        {formSubmitted && <p style={{ color: 'green' }}>Event saved successfully!</p>}
      </form>
    </div>
  );
};

const pageStyle = {
  backgroundColor: '#EAF1E6',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const headingStyle = {
  marginTop: '80px',
  marginBottom: '20px',
  fontSize: '2rem',
  color: '#333',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '2rem',
  border: '1px solid black',
  borderRadius: '8px',
  width: '600px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
};

const inputStyle = {
  width: '100%',
  padding: '1.1rem',
  borderRadius: '4px',
  border: '1px solid black',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#FFBF00',
  color: 'white',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default CreateEvent;
