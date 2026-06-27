package com.project.empservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.empservice.model.Teaching;
import com.project.empservice.service.TeachingService;

@RestController
@RequestMapping("/teaching")
@CrossOrigin("*")
public class TeachingController {
	
	    @Autowired
	    private TeachingService service;

	    @PostMapping("/save")
	    public Teaching save(@RequestBody Teaching teaching) {
	        return service.saveData(teaching);
	    }

	    @GetMapping("/get")
	    public List<Teaching> getAll() {
	        return service.getAllData();
	    }
}
