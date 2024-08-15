package com.ashwin.service;

import com.ashwin.datamodel.Task;
import com.ashwin.repo.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class TaskService {
    @Autowired
    private TaskRepo repo;

    //    CRUD
    public Task addTask(Task task){
        task.setTaskId(UUID.randomUUID().toString().split("-")[0]);
        task.setCreatedAt(LocalDateTime.now());
        return repo.save(task);
    }

    public List<Task> findAllTasks(){
        return repo.findAll();
    }

    public Task getTaskByTaskId(String taskId){
        return  repo.findById(taskId).get();
    }

    public Task updateTask(Task task){
        Task existingTask = repo.findById(task.getTaskId()).get();
        existingTask.setEventID(task.getTaskName());
        existingTask.setTaskName(task.getTaskName());
        existingTask.setTaskDescription(task.getTaskDescription());
        existingTask.setDeadlineAt(task.getDeadlineAt());
        existingTask.setAssigneeID(task.getAssigneeID());

        return repo.save(existingTask);
    }


    public String deleteTask(String taskId){
        repo.deleteById(taskId);
        return "Task deleted successfully";
    }
}
