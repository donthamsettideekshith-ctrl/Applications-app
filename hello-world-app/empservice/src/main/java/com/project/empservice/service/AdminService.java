package com.project.empservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.empservice.dto.LoginDto;
import com.project.empservice.model.Admin;
import com.project.empservice.repo.AdminRepo;

@Service
public class AdminService {

    @Autowired
    private AdminRepo adminRepo;

    public String verifyLogin(LoginDto loginDto) {

        Admin admin = adminRepo.findByUsername(
            loginDto.getUsername()
        );

        if (admin != null &&
            admin.getPassword().equals(loginDto.getPassword())) {

            return "Login Success";
        }

        return "Login Failed";
    }
}
