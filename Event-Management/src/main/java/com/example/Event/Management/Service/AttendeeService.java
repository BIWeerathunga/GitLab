/*package com.example.Event.Management.Service;

import com.example.Event.Management.model.Attendee;
import com.example.Event.Management.repository.AttendeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendeeService {

    @Autowired
    private AttendeeRepository attendeeRepository;

    public Attendee saveAttendee(Attendee attendee) {
        return attendeeRepository.save(attendee);
    }

    public List<Attendee> getAttendeesByEventId(Long eventId) {
        return attendeeRepository.findByEventId(eventId);
    }
}*/
package com.example.Event.Management.Service;

import com.example.Event.Management.model.Attendee;
import com.example.Event.Management.repository.AttendeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendeeService {

    @Autowired
    private AttendeeRepository attendeeRepository;

    public Attendee saveAttendee(Attendee attendee) {
        return attendeeRepository.save(attendee);
    }

    public List<Attendee> getAttendeesByEventId(Long eventId) {
        return attendeeRepository.findByEventId(eventId);
    }
}
