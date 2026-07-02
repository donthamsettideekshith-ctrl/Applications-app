package com.project.empservice.repo;

import org.springframework.data.jpa.repository.JpaRepository; 

import com.project.empservice.model.Employee;

public interface Employerepo extends JpaRepository<Employee, Integer> {
	 Employee findByUsername(String username);
	
}
