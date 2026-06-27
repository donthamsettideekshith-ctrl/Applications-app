package com.project.empservice.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.empservice.model.Software;
import com.project.empservice.repo.SoftwareRepo;

@Service
public class SoftwareService {

	    @Autowired
	    private SoftwareRepo repo;

	    public Software saveData(Software software) {
	        return repo.save(software);
	    }

	    public List<Software> getAllData() {
	        return repo.findAll();
	    }
	}

