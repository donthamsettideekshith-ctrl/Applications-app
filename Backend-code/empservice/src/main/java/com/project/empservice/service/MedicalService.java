package com.project.empservice.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.empservice.model.Medical;
import com.project.empservice.repo.MedicalRepo;
@Service
public class MedicalService {

	    @Autowired
	    private MedicalRepo repo;

	    public Medical saveData(Medical medical) {
	        return repo.save(medical);
	    }

	    public List<Medical> getAllData() {
	        return repo.findAll();
	    }
	}

