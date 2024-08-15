package com.ashwin.service;

import com.ashwin.datamodel.Event;
import com.ashwin.dto.UserEventsDTO;
import com.ashwin.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;

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
            existingEvent.setEventCreatedBy(event.getEventCreatedBy());
            existingEvent.setEventParticipants(event.getEventParticipants());
            return repo.save(existingEvent);
        }
        return null;
    }

    public String deleteEvent(String id) {
        repo.deleteById(id);
        return "Event deleted successfully";
    }

    public UserEventsDTO getUserEvents(String email) {
        List<Event> createdEvents = repo.findAll().stream()
                .filter(event -> Objects.equals(event.getEventCreatedBy(), email))  // Safely compare with null
                .collect(Collectors.toList());

        List<Event> participatingEvents = repo.findAll().stream()
                .filter(event -> event.getEventParticipants() != null && event.getEventParticipants().contains(email))
                .collect(Collectors.toList());

        List<String> createdEventIDs = createdEvents.stream().map(Event::getId).collect(Collectors.toList());

        List<String> participatingEventIDs = participatingEvents.stream().map(Event::getId).collect(Collectors.toList());

        return new UserEventsDTO(createdEvents, participatingEvents, createdEventIDs, participatingEventIDs);
    }
}
