package com.project.empservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.empservice.model.Banking;
import com.project.empservice.service.BankingService;

@RestController
@RequestMapping("/banking")
@CrossOrigin("*")
public class BankingController {
	
	

	    @Autowired
	    private BankingService service;

	    @PostMapping("/save")
	    public Banking save(@RequestBody Banking banking) {
	        return service.saveData(banking);
	    }

	    @GetMapping("/get")
	    public List<Banking> getAll() {
	        return service.getAllData();
	    }
}
