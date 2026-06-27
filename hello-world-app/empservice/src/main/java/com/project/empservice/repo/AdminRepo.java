package com.project.empservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.empservice.model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer> {

    Admin findByUsername(String username);
}
