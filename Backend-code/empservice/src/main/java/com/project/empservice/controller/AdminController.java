package com.project.empservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.empservice.dto.LoginDto;
import com.project.empservice.service.AdminService;

@RestController
@RequestMapping("/Admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public String login(
        @RequestBody LoginDto loginDto
    ) {

        return adminService.verifyLogin(loginDto);
    }
}
