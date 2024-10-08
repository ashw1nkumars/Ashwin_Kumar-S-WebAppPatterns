package com.ashwin.controller;

import com.ashwin.datamodel.Role;
import com.ashwin.datamodel.Task;
import com.ashwin.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/role")
public class RoleController {

    @Autowired
    private RoleService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Role createRole(@RequestBody Role role){
        return service.addRole(role);
    }

    @GetMapping
    public List<Role> getAllRole(){
        return service.findAllRoles();
    }

    @GetMapping("/{id}")
    public Role getAllRole(@PathVariable String id){
        return service.getRoleById(id);
    }

    @PutMapping
    public Role updateRole(@RequestBody Role role){
        return service.updateRole(role);
    }

    @DeleteMapping("/{id}")
    public String deleteTole(@PathVariable String id){
        return service.deleteRole(id);
    }
}
