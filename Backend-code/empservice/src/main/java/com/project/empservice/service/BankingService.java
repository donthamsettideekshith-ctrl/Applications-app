package com.project.empservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.empservice.model.Banking;
import com.project.empservice.repo.BankingRepo;

@Service
public class BankingService {
	@Autowired
    private BankingRepo repo;

    public Banking saveData(Banking banking) {
        return repo.save(banking);
    }

    public List<Banking> getAllData() {
        return repo.findAll();
    }
}
