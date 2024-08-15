package com.ashwin.service;

import com.ashwin.datamodel.Participant;
import com.ashwin.repo.ParticipantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class ParticipantService {
    @Autowired
    private ParticipantRepo repo;

    public Participant addParticipant(Participant data) {
        data.setId(UUID.randomUUID().toString().split("-")[0]);
        data.setCreatedAt(LocalDateTime.now());
        return repo.save(data);
    }

    public List<Participant> findAllParticipants() {
        return repo.findAll();
    }

    public Participant getParticipantById(String id) {
        return repo.findById(id).orElse(null);
    }

    public Participant updateParticipant(Participant participant) {
        Participant existingEvent = repo.findById(participant.getId()).orElse(null);
        if (existingEvent != null) {
            existingEvent.setEventID(participant.getEventID());
            existingEvent.setUserID(participant.getUserID());
            existingEvent.setStatus(participant.getStatus());

            return repo.save(existingEvent);
        }
        return null;
    }

    public String deleteParticipant(String id) {
        repo.deleteById(id);
        return "Event deleted successfully";
    }
}
