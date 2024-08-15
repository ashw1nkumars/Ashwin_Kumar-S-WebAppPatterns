package com.ashwin.dto;

import com.ashwin.datamodel.Event;

import java.util.List;

public class UserEventsDTO {
    private List<Event> createdEvents;
    private List<Event> participatingEvents;
    private List<String> createdEventIDs;
    private List<String> participatingEventIDs;

    // Constructors
    public UserEventsDTO(List<Event> createdEvents, List<Event> participatingEvents, List<String> createdEventIDs, List<String> participatingEventIDs) {
        this.createdEvents = createdEvents;
        this.participatingEvents = participatingEvents;
        this.createdEventIDs = createdEventIDs;
        this.participatingEventIDs = participatingEventIDs;
    }

    // Getters and Setters
    public List<Event> getCreatedEvents() {
        return createdEvents;
    }

    public void setCreatedEvents(List<Event> createdEvents) {
        this.createdEvents = createdEvents;
    }

    public List<Event> getParticipatingEvents() {
        return participatingEvents;
    }

    public void setParticipatingEvents(List<Event> participatingEvents) {
        this.participatingEvents = participatingEvents;
    }

    public List<String> getCreatedEventIDs() {
        return createdEventIDs;
    }

    public void setCreatedEventIDs(List<String> createdEventIDs) {
        this.createdEventIDs = createdEventIDs;
    }

    public List<String> getParticipatingEventIDs() {
        return participatingEventIDs;
    }

    public void setParticipatingEventIDs(List<String> participatingEventIDs) {
        this.participatingEventIDs = participatingEventIDs;
    }
}

