package com.project.empservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.empservice.model.Medical;
import com.project.empservice.service.MedicalService;

@RestController
@RequestMapping("/medical")
@CrossOrigin("*")
public class MedicalController {
	
	

	    @Autowired
	    private MedicalService service;

	    @PostMapping("/save")
	    public Medical save(@RequestBody Medical medical) {
	        return service.saveData(medical);
	    }

	    @GetMapping("/get")
	    public List<Medical> getAll() {
	        return service.getAllData();
	    }
}
