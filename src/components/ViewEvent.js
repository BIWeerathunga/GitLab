import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEvent } from '../Services/api';

const ViewEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    const result = await getEvent(id);
    setEvent(result.data);
  };

  return (
    <div style={pageStyle}>
      {event ? (
        <div style={eventContainerStyle}>
          <h1 style={headingStyle}>{event.name}</h1>
          <p style={detailStyle}><strong>Description:</strong> {event.description}</p>
          <p style={detailStyle}><strong>Date:</strong> {event.date}</p>
          <p style={detailStyle}><strong>Location:</strong> {event.location}</p>
          <Link to="/allevents" style={backLinkStyle}>Back to Events</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const pageStyle = {
  backgroundColor: '#EAF1E6',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const eventContainerStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  width: '80%',
  marginTop:'100px',
  maxWidth: '600px',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
  color: 'blue',
};

const detailStyle = {
  fontSize: '1.2rem',
  marginBottom: '10px',
};

const backLinkStyle = {
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#FFBF00',
  padding: '10px 20px',
  borderRadius: '4px',
  display: 'inline-block',
  marginTop: '20px',
  fontSize: '16px',
  fontWeight: 'bold',
};

export default ViewEvent;
