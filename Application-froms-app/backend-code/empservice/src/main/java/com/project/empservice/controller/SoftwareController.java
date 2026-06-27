package com.project.empservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.empservice.model.Software;
import com.project.empservice.service.SoftwareService;

@RestController
@RequestMapping("/software")
@CrossOrigin(origins="http://localhost:3000")
public class SoftwareController {
	
	

	    @Autowired
	    private SoftwareService service;

	    @PostMapping("/saveData")
	    public Software save(@RequestBody Software software) {
	        return service.saveData(software);
	    }

	    @GetMapping("/get")
	    public List<Software> getAll() {
	        return service.getAllData();
	    }
	}
