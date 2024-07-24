/*package com.example.Event.Management.Controller;

import com.example.Event.Management.exception.ResourceNotFoundException;
import com.example.Event.Management.model.Events;
import com.example.Event.Management.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/Events")
@CrossOrigin(origins = "http://localhost:3000")
public class EventsController {

    @Autowired
    private EventRepository eventRepository;

    // Get all Events
    @GetMapping
    public List<Events> getAllEvents() {
        return eventRepository.findAll();
    }

    // Create a new Event
    @PostMapping
    public Events createEvent(@RequestBody Events event) {
        return eventRepository.save(event);
    }

    // Get Event by ID
    @GetMapping("/{id}")
    public ResponseEntity<Events> getEventById(@PathVariable Long id) {
        Events event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id :" + id));
        return ResponseEntity.ok(event);
    }

    // Update Event
    @PutMapping("/{id}")
    public ResponseEntity<Events> updateEvent(@PathVariable Long id, @RequestBody Events eventDetails) {
        Events event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id :" + id));

        event.setName(eventDetails.getName());
        event.setDescription(eventDetails.getDescription());
        event.setDate(eventDetails.getDate());
        event.setLocation(eventDetails.getLocation());

        Events updatedEvent = eventRepository.save(event);
        return ResponseEntity.ok(updatedEvent);
    }

    // Delete Event
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEvent(@PathVariable Long id) {
        Events event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id :" + id));

        eventRepository.delete(event);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}*/


/*package com.example.Event.Management.Controller;

import com.example.Event.Management.exception.ResourceNotFoundException;
import com.example.Event.Management.model.Attendee;
import com.example.Event.Management.model.Events;
import com.example.Event.Management.repository.EventRepository;
import com.example.Event.Management.Service.AttendeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/Events")
@CrossOrigin(origins = "http://localhost:3000")
public class EventsController {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private AttendeeService attendeeService;

    // Get all Events
    @GetMapping
    public List<Events> getAllEvents() {
        return eventRepository.findAll();
    }

    // Create a new Event
    @PostMapping
    public Events createEvent(@RequestBody Events event) {
        return eventRepository.save(event);
    }

    // Get Event by ID
    @GetMapping("/{id}")
    public ResponseEntity<Events> getEventById(@PathVariable Long id) {
        Events event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id :" + id));
        return ResponseEntity.ok(event);
    }

    // Update Event
    @PutMapping("/{id}")
    public ResponseEntity<Events> updateEvent(@PathVariable Long id, @RequestBody Events eventDetails) {
        Events event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id :" + id));

        event.setName(eventDetails.getName());
        event.setDescription(eventDetails.getDescription());
        event.setDate(eventDetails.getDate());
        event.setLocation(eventDetails.getLocation());

        Events updatedEvent = eventRepository.save(event);
        return ResponseEntity.ok(updatedEvent);
    }

    // Delete Event
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEvent(@PathVariable Long id) {
        Events event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id :" + id));

        eventRepository.delete(event);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    // Get Attendees for Event
    @GetMapping("/{eventId}/attendees")
    public List<Attendee> getAttendeesByEventId(@PathVariable Long eventId) {
        return attendeeService.getAttendeesByEventId(eventId);
    }

    // Register Attendee for Event
    @PostMapping("/{eventId}/attendees")
    public Attendee registerAttendee(@PathVariable Long eventId, @RequestBody Attendee attendee) {
        Events event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id :" + eventId));
        attendee.setEvent(event);
        return attendeeService.saveAttendee(attendee);
    }
}*/

package com.example.Event.Management.Controller;

import com.example.Event.Management.exception.ResourceNotFoundException;
import com.example.Event.Management.model.Attendee;
import com.example.Event.Management.model.Events;
import com.example.Event.Management.repository.EventRepository;
import com.example.Event.Management.Service.AttendeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/Events")
@CrossOrigin(origins = "http://localhost:3000")
public class EventsController {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private AttendeeService attendeeService;

    // Get all Events
    @GetMapping
    public List<Events> getAllEvents() {
        return eventRepository.findAll();
    }

    // Create a new Event
    @PostMapping
    public Events createEvent(@RequestBody Events event) {
        return eventRepository.save(event);
    }

    // Get Event by ID
    @GetMapping("/{id}")
    public ResponseEntity<Events> getEventById(@PathVariable Long id) {
        Events event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id :" + id));
        return ResponseEntity.ok(event);
    }

    // Update Event
    @PutMapping("/{id}")
    public ResponseEntity<Events> updateEvent(@PathVariable Long id, @RequestBody Events eventDetails) {
        Events event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id :" + id));

        event.setName(eventDetails.getName());
        event.setDescription(eventDetails.getDescription());
        event.setDate(eventDetails.getDate());
        event.setLocation(eventDetails.getLocation());

        Events updatedEvent = eventRepository.save(event);
        return ResponseEntity.ok(updatedEvent);
    }

    // Delete Event
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEvent(@PathVariable Long id) {
        Events event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id :" + id));

        eventRepository.delete(event);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    // Get Attendees for Event
    @GetMapping("/{eventId}/attendees")
    public List<Attendee> getAttendeesByEventId(@PathVariable Long eventId) {
        return attendeeService.getAttendeesByEventId(eventId);
    }

    // Register Attendee for Event
    @PostMapping("/{eventId}/attendees")
    public Attendee registerAttendee(@PathVariable Long eventId, @RequestBody Attendee attendee) {
        Events event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id :" + eventId));
        attendee.setEvent(event);
        return attendeeService.saveAttendee(attendee);
    }
}
