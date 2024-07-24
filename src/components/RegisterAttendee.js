
/*import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { registerAttendee, getAttendeesByEvent } from '../Services/api';

const RegisterAttendee = () => {
  const { eventId } = useParams();
  const [attendee, setAttendee] = useState({ name: '', email: '' });
  const [attendees, setAttendees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = async () => {
    const result = await getAttendeesByEvent(eventId);
    setAttendees(result.data);
  };

  const handleChange = (e) => {
    setAttendee({ ...attendee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerAttendee(eventId, attendee);
    fetchAttendees(); // Fetch the updated list of attendees
    setAttendee({ name: '', email: '' }); // Clear the form
  };

  return (
    <div style={formContainerStyle}>
      <h2>Register Attendee for Event {eventId}</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={attendee.name} 
          onChange={handleChange} 
          required 
          style={inputStyle} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={attendee.email} 
          onChange={handleChange} 
          required 
          style={inputStyle} 
        />
        <button type="submit" style={buttonStyle}>Register</button>
      </form>
      <div style={attendeesContainerStyle}>
        <h3>Registered Attendees</h3>
        <ul style={attendeesListStyle}>
          {attendees.map((att) => (
            <li key={att.id} style={attendeeItemStyle}>
              {att.name} ({att.email})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const formContainerStyle = {
  backgroundColor: '#EAF1E6',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem',
  border: '1px solid black',
  borderRadius: '8px',
  width: '300px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid black',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#28a745',
  color: '#fff',
  cursor: 'pointer',
};

const attendeesContainerStyle = {
  marginTop: '2rem',
  width: '300px',
};

const attendeesListStyle = {
  listStyleType: 'none',
  padding: 0,
};

const attendeeItemStyle = {
  padding: '0.5rem',
  borderBottom: '1px solid #ddd',
};

export default RegisterAttendee;*/
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { registerAttendee, getAttendeesByEvent } from '../Services/api';

const RegisterAttendee = () => {
  const { eventId } = useParams();
  const [attendee, setAttendee] = useState({ name: '', email: '' });
  const [attendees, setAttendees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = async () => {
    const result = await getAttendeesByEvent(eventId);
    setAttendees(result.data);
  };

  const handleChange = (e) => {
    setAttendee({ ...attendee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerAttendee(eventId, attendee);
    fetchAttendees(); // Fetch the updated list of attendees
    setAttendee({ name: '', email: '' }); // Clear the form
  };

  return (
    <div style={formContainerStyle}>
      <h2>Register Attendee for Event {eventId}</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={attendee.name} 
          onChange={handleChange} 
          required 
          style={inputStyle} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={attendee.email} 
          onChange={handleChange} 
          required 
          style={inputStyle} 
        />
        <button type="submit" style={buttonStyle}>Register</button>
      </form>
      <div style={attendeesContainerStyle}>
        <h3>Registered Attendees</h3>
        <table style={tableStyle}>
          <thead>
            <tr style={tableHeaderStyle}>
              <th style={tableCellStyle}>Name</th>
              <th style={tableCellStyle}>Email</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map((att) => (
              <tr key={att.id} style={tableRowStyle}>
                <td style={tableCellStyle}>{att.name}</td>
                <td style={tableCellStyle}>{att.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const formContainerStyle = {
  backgroundColor: '#EAF1E6',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '2rem',
  border: '1px solid black',
  borderRadius: '8px',
  width: '300px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid black',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#28a745',
  color: '#fff',
  cursor: 'pointer',
};

const attendeesContainerStyle = {
  marginTop: '2rem',
  width: '300px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const tableHeaderStyle = {
  backgroundColor: '#f4f4f4',
  borderBottom: '2px solid #ddd',
};

const tableCellStyle = {
  padding: '0.75rem',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
};

const tableRowStyle = {
  '&:hover': {
    backgroundColor: '#f9f9f9',
  },
};

export default RegisterAttendee;

