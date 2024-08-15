package com.ashwin.service;

import com.ashwin.datamodel.User;
import com.ashwin.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepo repo;

    public User addUser(User user) {
        user.setId(UUID.randomUUID().toString().split("-")[0]);
        user.setCreatedAt(LocalDateTime.now());
        return repo.save(user);
    }

    public List<User> findAllUsers() {
        return repo.findAll();
    }

    public User getUserById(String id) {
        return repo.findById(id).orElse(null);
    }

    public User updateUser(User user) {
        User existingUser = repo.findById(user.getId()).orElse(null);
        if (existingUser != null) {
            existingUser.setEmail(user.getEmail());
            existingUser.setName(user.getName());
            existingUser.setPassword(user.getPassword());
            existingUser.setRole(user.getRole());
            return repo.save(existingUser);
        }
        return null;
    }

    public String deleteUser(String id) {
        repo.deleteById(id);
        return "User deleted successfully";
    }
}
