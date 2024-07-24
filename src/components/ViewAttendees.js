import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAttendees } from '../Services/api';

const ViewAttendees = () => {
  const { eventId } = useParams();
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    loadAttendees();
  }, []);

  const loadAttendees = async () => {
    const result = await getAttendees(eventId);
    setAttendees(result.data);
  };

  return (
    <div style={pageStyle}>
      <h2>Attendees for Event</h2>
      <ul style={listStyle}>
        {attendees.map((attendee) => (
          <li key={attendee.id} style={listItemStyle}>
            {attendee.name} - {attendee.email}
          </li>
        ))}
      </ul>
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

const listStyle = {
  listStyleType: 'none',
  padding: '0',
  width: '100%',
  maxWidth: '600px',
};

const listItemStyle = {
  backgroundColor: '#fff',
  margin: '10px 0',
  padding: '10px',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'space-between',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

export default ViewAttendees;
