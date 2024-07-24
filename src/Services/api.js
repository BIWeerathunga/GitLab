import axios from 'axios';


const API_URL = 'http://localhost:8080/api/Events';


export const getEvents = async () => {
  return await axios.get(API_URL);
};

export const createEvent = async (event) => {
  return await axios.post(API_URL, event);
};

export const updateEvent = async (id, event) => {
  return await axios.put(`${API_URL}/${id}`, event);
};

export const deleteEvent = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

export const getEvent = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};
export const registerAttendee = async (eventId, attendee) => {
  return await axios.post(`${API_URL}/events/${eventId}/attendees`, attendee);
};

export const getAttendeesByEvent = async (eventId) => {
  return await axios.get(`${API_URL}/events/${eventId}/attendees`);
};
/*import axios from 'axios';

// Define base URLs for the APIs
const EVENTS_API_URL = 'http://localhost:8080/api/Events';
const ATTENDEES_API_URL = 'http://localhost:8080/api/Attendees';

// Event API calls
export const getEvents = async () => {
  return await axios.get(EVENTS_API_URL);
};

export const createEvent = async (event) => {
  return await axios.post(EVENTS_API_URL, event);
};

export const updateEvent = async (id, event) => {
  return await axios.put(`${EVENTS_API_URL}/${id}`, event);
};

export const deleteEvent = async (id) => {
  return await axios.delete(`${EVENTS_API_URL}/${id}`);
};

export const getEvent = async (id) => {
  return await axios.get(`${EVENTS_API_URL}/${id}`);
};

// Attendee API calls
export const registerAttendee = async (eventId, attendee) => {
  return await axios.post(`${EVENTS_API_URL}/${eventId}/attendees`, attendee);
};

export const getAttendeesByEvent = async (eventId) => {
  return await axios.get(`${EVENTS_API_URL}/${eventId}/attendees`);
};*/
