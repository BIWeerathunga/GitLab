/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEvents, deleteEvent } from '../Services/api';
import { FaEye, FaEdit, FaTrashAlt, FaUserPlus } from 'react-icons/fa';

const ReadEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const result = await getEvents();
      // Check if result.data is an array
      if (Array.isArray(result.data)) {
        setEvents(result.data);
      } else {
        console.error('Expected an array but got:', result.data);
        setEvents([]); // Ensure events is always an array
      }
    } catch (error) {
      console.error('Failed to load events:', error);
      setEvents([]); // Ensure events is always an array
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      loadEvents();
    } catch (error) {
      console.error('Failed to delete event:', error);
    }
  };

  return (
    <div style={pageStyle}>
      <Link to="/create" style={createLinkStyle}>Create Event</Link>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Event Name</th>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(events) && events.map((event) => (
            <tr key={event.id} style={tableRowStyle}>
              <td style={tableCellStyle}>{event.name}</td>
              <td style={tableCellStyle}>{event.date}</td>
              <td style={tableCellStyle}>
                <div style={buttonContainerStyle}>
                  <Link to={`/view/${event.id}`} style={viewButtonStyle}>
                    <FaEye size={20} />
                  </Link>
                  <Link to={`/update/${event.id}`} style={editButtonStyle}>
                    <FaEdit size={20} />
                  </Link>
                  <Link to={`/register/${event.id}`} style={registerButtonStyle}>
                    <FaUserPlus size={20} />
                  </Link>
                  <button onClick={() => handleDelete(event.id)} style={deleteButtonStyle}>
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

const createLinkStyle = {
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#007bff',
  padding: '10px 20px',
  borderRadius: '4px',
  marginBottom: '20px',
  fontSize: '16px',
  fontWeight: 'bold',
};

const tableStyle = {
  width: '100%',
  maxWidth: '800px',
  border: '2px solid black',
  borderCollapse: 'collapse',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const tableHeaderStyle = {
  backgroundColor: '#FFBF00',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  borderRight: '1px solid black',
  borderBottom: '2px solid black',
};

const tableRowStyle = {
  borderBottom: '1px solid black',
};

const tableCellStyle = {
  padding: '10px',
  borderRight: '1px solid black',
  textAlign: 'center',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
};

const viewButtonStyle = {
  color: 'blue',
  padding: '5px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
};

const editButtonStyle = {
  color: '#ffc107',
  padding: '5px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
};

const registerButtonStyle = {
  color: '#17a2b8',
  padding: '5px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
};

const deleteButtonStyle = {
  color: 'red',
  padding: '5px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
};

export default ReadEvents;*/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEvents, deleteEvent } from '../Services/api';
import { FaEye, FaEdit, FaTrashAlt, FaUserPlus } from 'react-icons/fa';

const ReadEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const result = await getEvents();
      console.log('API response:', result.data); // Debugging line

      if (Array.isArray(result.data)) {
        setEvents(result.data);
      } else {
        console.error('Expected an array but got:', result.data);
        setEvents([]);
      }
    } catch (error) {
      console.error('Failed to load events:', error);
      setEvents([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      loadEvents();
    } catch (error) {
      console.error('Failed to delete event:', error);
    }
  };

  return (
    <div style={pageStyle}>
      <Link to="/create" style={createLinkStyle}>Create Event</Link>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Event Name</th>
            <th style={tableHeaderStyle}>Date</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(events) && events.length > 0 ? (
            events.map((event) => (
              <tr key={event.id} style={tableRowStyle}>
                <td style={tableCellStyle}>{event.name || 'No name'}</td>
                <td style={tableCellStyle}>{event.date || 'No date'}</td>
                <td style={tableCellStyle}>
                  <div style={buttonContainerStyle}>
                    <Link to={`/view/${event.id}`} style={viewButtonStyle}>
                      <FaEye size={20} />
                    </Link>
                    <Link to={`/update/${event.id}`} style={editButtonStyle}>
                      <FaEdit size={20} />
                    </Link>
                    <Link to={`/register/${event.id}`} style={registerButtonStyle}>
                      <FaUserPlus size={20} />
                    </Link>
                    <button onClick={() => handleDelete(event.id)} style={deleteButtonStyle}>
                      <FaTrashAlt size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={tableCellStyle}>No events available</td>
            </tr>
          )}
        </tbody>
      </table>
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

const createLinkStyle = {
  textDecoration: 'none',
  color: '#fff',
  backgroundColor: '#007bff',
  padding: '10px 20px',
  borderRadius: '4px',
  marginBottom: '20px',
  fontSize: '16px',
  fontWeight: 'bold',
};

const tableStyle = {
  width: '100%',
  maxWidth: '800px',
  border: '2px solid black',
  borderCollapse: 'collapse',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const tableHeaderStyle = {
  backgroundColor: '#FFBF00',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  borderRight: '1px solid black',
  borderBottom: '2px solid black',
};

const tableRowStyle = {
  borderBottom: '1px solid black',
};

const tableCellStyle = {
  padding: '10px',
  borderRight: '1px solid black',
  textAlign: 'center',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
};

const viewButtonStyle = {
  color: 'blue',
  padding: '5px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
};

const editButtonStyle = {
  color: '#ffc107',
  padding: '5px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
};

const registerButtonStyle = {
  color: '#17a2b8',
  padding: '5px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
};

const deleteButtonStyle = {
  color: 'red',
  padding: '5px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
};

export default ReadEvents;

