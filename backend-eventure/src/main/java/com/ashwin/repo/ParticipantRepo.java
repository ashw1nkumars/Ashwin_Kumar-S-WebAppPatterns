package com.ashwin.repo;

import com.ashwin.datamodel.*;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ParticipantRepo extends MongoRepository<Participant, String> {
}
