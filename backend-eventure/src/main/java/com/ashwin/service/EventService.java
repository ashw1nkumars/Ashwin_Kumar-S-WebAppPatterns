package com.ashwin.service;

import com.ashwin.datamodel.Event;
import com.ashwin.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class EventService {
    @Autowired
    private EventRepo repo;

    public Event addEvent(Event event) {
        event.setId(UUID.randomUUID().toString().split("-")[0]);
        event.setCreatedAt(LocalDateTime.now());
        return repo.save(event);
    }

    public List<Event> findAllEvents() {
        return repo.findAll();
    }

    public Event getEventById(String id) {
        return repo.findById(id).orElse(null);
    }

    public Event updateEvent(Event event) {
        Event existingEvent = repo.findById(event.getId()).orElse(null);
        if (existingEvent != null) {
            existingEvent.setEventTitle(event.getEventTitle());
            existingEvent.setEventDate(event.getEventDate());
            existingEvent.setEventLocation(event.getEventLocation());
            existingEvent.setEventDescription(event.getEventDescription());
            existingEvent.setEventUser(event.getEventUser());
            return repo.save(existingEvent);
        }
        return null;
    }

    public String deleteEvent(String id) {
        repo.deleteById(id);
        return "Event deleted successfully";
    }
}
