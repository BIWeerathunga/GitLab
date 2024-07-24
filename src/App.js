import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Navbar from './components/Navbar';
import CreateEvent from './components/CreateEvent';
import ReadEvents from './components/ReadEvents';
import UpdateEvent from './components/UpdateEvent';
import ViewEvent from './components/ViewEvent';
import RegisterAttendee from './components/RegisterAttendee';

function App() {
  return (
    <Router>
<Navbar/>
    <div>
      <Routes>
        
        <Route path="/allevents" element={<ReadEvents />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/update/:id" element={<UpdateEvent />} />
        <Route path="/view/:id" element={<ViewEvent />} /> {/* Add this route */}
        <Route path="/register/:eventId" element={<RegisterAttendee />} />
      </Routes>
    </div>
  
  </Router>
  );
}

export default App;
