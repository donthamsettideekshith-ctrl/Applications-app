package com.project.empservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.empservice.model.Teaching;
import com.project.empservice.repo.TeachingRepo;

@Service
public class TeachingService {
	
	

	    @Autowired
	    private TeachingRepo repo;

	    public Teaching saveData(Teaching teaching) {
	        return repo.save(teaching);
	    }

	    public List<Teaching> getAllData() {
	        return repo.findAll();
	    }
}
