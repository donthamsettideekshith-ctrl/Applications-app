package com.project.empservice.response;

import lombok.Data;

@Data
public class Employeeresponse {
	private int id;
	private String name;
	private int age;
	private String email;
	AddressResponse addressresponse;
	
	

}
