package com.project.empservice.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.project.empservice.model.Software;


public interface SoftwareRepo extends JpaRepository<Software, Integer>{


	
}
