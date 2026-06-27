package com.project.empservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.empservice.model.Medical;

public interface MedicalRepo extends JpaRepository<Medical, Integer>{

}
