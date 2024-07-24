/*package com.example.Event.Management.Controller;

import com.example.Event.Management.model.Attendee;
import com.example.Event.Management.Service.AttendeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attendees")
@CrossOrigin(origins = "http://localhost:3000")
public class AttendeeController {

    @Autowired
    private AttendeeService attendeeService;

    @PostMapping
    public Attendee createAttendee(@RequestBody Attendee attendee) {
        return attendeeService.saveAttendee(attendee);
    }

    @GetMapping("/{eventId}")
    public List<Attendee> getAttendeesByEventId(@PathVariable Long eventId) {
        return attendeeService.getAttendeesByEventId(eventId);
    }
}*/
package com.example.Event.Management.Controller;

import com.example.Event.Management.model.Attendee;
import com.example.Event.Management.Service.AttendeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attendees")
@CrossOrigin(origins = "http://localhost:3000")
public class AttendeeController {

    @Autowired
    private AttendeeService attendeeService;

    // Create a new Attendee
    @PostMapping
    public Attendee createAttendee(@RequestBody Attendee attendee) {
        return attendeeService.saveAttendee(attendee);
    }

    // Get Attendees by Event ID
    @GetMapping("/{eventId}")
    public List<Attendee> getAttendeesByEventId(@PathVariable Long eventId) {
        return attendeeService.getAttendeesByEventId(eventId);
    }
}
