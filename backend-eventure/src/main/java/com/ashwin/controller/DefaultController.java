package com.ashwin.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class DefaultController {
    @GetMapping
    public String healthCheck(){
        return "Backend Api is up and running";
    }
}
