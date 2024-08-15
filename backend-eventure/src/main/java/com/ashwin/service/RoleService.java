package com.ashwin.service;

import com.ashwin.datamodel.Role;
import com.ashwin.repo.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    @Autowired
    private RoleRepo repo;

    //    CRUD
    public Role addRole(Role role){
        return repo.save(role);
    }

    public List<Role> findAllRoles(){
        return repo.findAll();
    }

    public Role getRoleById(String id){
        return  repo.findById(id).get();
    }

    public Role updateRole(Role role){
        Role existingRole = repo.findById(role.getId()).get();
        existingRole.setRoleName(role.getRoleName());
        return repo.save(existingRole);
    }

    public String deleteRole(String id){
        repo.deleteById(id);
        return "Role deleted successfully";
    }
}

