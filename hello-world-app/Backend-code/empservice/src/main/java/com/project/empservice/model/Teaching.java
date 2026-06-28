package com.project.empservice.model;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "teaching")
@Data
public class Teaching {
	
	

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer id;

	    private String name;
	    private String skills;
	    private String experience;
	    private Double currentSalary;
	    private Double expectedSalary;
	    private Long phoneNo;
	    private String email;
	    private String qualifications;
	}

