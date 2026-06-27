package com.project.empservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.empservice.model.Teaching;

public interface TeachingRepo extends JpaRepository<Teaching, Integer>{

}
