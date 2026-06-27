package com.project.empservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.empservice.model.Banking;

public interface BankingRepo extends JpaRepository<Banking, Integer>{

}
