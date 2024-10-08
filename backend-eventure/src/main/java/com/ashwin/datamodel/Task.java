package com.ashwin.datamodel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection= "tasks")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {
    @Id
    private String taskId;
    private String taskName;
    private String taskDescription;
    private String eventID;
    private String assigneeID;
    private LocalDateTime deadlineAt;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
