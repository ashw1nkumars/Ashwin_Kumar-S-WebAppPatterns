package com.ashwin.controller;

import com.ashwin.datamodel.Event;
import com.ashwin.dto.UserEventsDTO;
import com.ashwin.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Event createEvent(@RequestBody Event event) {
        return service.addEvent(event);
    }

    @GetMapping
    public List<Event> getAllEvents() {
        return service.findAllEvents();
    }

    @GetMapping("/{id}")
    public Event getEventById(@PathVariable String id) {
        return service.getEventById(id);
    }

    @PostMapping("/user-events")
    public UserEventsDTO getUserEvents(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");
        return service.getUserEvents(email);
    }
    @PutMapping
    public Event updateEvent(@RequestBody Event event) {
        return service.updateEvent(event);
    }

    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable String id) {
        return service.deleteEvent(id);
    }
}

