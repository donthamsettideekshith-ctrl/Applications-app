package com.project.empservice.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.empservice.dto.LoginDto;
import com.project.empservice.model.Employee;
import com.project.empservice.repo.Employerepo;
import com.project.empservice.response.Employeeresponse;

@Service
public class EmployeService {

    @Autowired
    Employerepo employerepo;

    @Autowired
    ModelMapper mapper;
    
    
    
    public String login(LoginDto dto){

        Employee emp = employerepo.findByUsername(dto.getUsername());

        if(emp != null &&
           emp.getPassword().equals(dto.getPassword())){

            return "Login Success";
        }

        return "Login Failed";
    }

    // GET BY ID
    public Employeeresponse getEmployeById(int id) {

        Optional<Employee> employee = employerepo.findById(id);

        Employee emp = employee.get();

        Employeeresponse response =
                mapper.map(emp, Employeeresponse.class);

        return response;
    }

    // POST
    public Employee saveEmployee(Employee employee) {
        return employerepo.save(employee);
    }

    // GET ALL
    public List<Employee> getAllEmployees() {
        return employerepo.findAll();
    }

    // UPDATE
    public Employee updateEmployee(int id, Employee employee) {

        Employee emp = employerepo.findById(id).get();

        emp.setUsername(employee.getUsername());
        emp.setFirstname(employee.getFirstname());
        emp.setLastname(employee.getLastname());
        emp.setAddress(employee.getAddress());
        emp.setAge(employee.getAge());
        emp.setEmail(employee.getEmail());
        emp.setPassword(employee.getPassword());

        return employerepo.save(emp);
    }

    // DELETE
    public String deleteEmployee(int id) {

        employerepo.deleteById(id);

        return "Employee Deleted Successfully";
    }
}