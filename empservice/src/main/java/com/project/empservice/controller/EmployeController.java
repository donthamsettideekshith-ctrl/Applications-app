package com.project.empservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.empservice.dto.LoginDto;
import com.project.empservice.model.Employee;
import com.project.empservice.response.Employeeresponse;
import com.project.empservice.service.EmployeService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class EmployeController {

    @Autowired
    EmployeService empservice;
    
    @PostMapping("/login")
    public String login(@RequestBody LoginDto dto){

        return empservice.login(dto);
    }

    // GET BY ID
    @GetMapping("/getEmp/{eid}")
    Employeeresponse getEmployee(@PathVariable int eid) {

        return empservice.getEmployeById(eid);
    }

    // POST
    @PostMapping("/saveEmp")
    public Employee saveEmployee(@RequestBody Employee employee) {

        return empservice.saveEmployee(employee);
    }

    // GET ALL
    @GetMapping("/getAll")
    public List<Employee> getAllEmployees() {

        return empservice.getAllEmployees();
    }

    // UPDATE
    @PutMapping("/updateEmp/{id}")
    public Employee updateEmployee(
            @PathVariable int id,
            @RequestBody Employee employee) {

        return empservice.updateEmployee(id, employee);
    }

    // DELETE
    @DeleteMapping("/deleteEmp/{id}")
    public String deleteEmployee(@PathVariable int id) {

        return empservice.deleteEmployee(id);
    }
}