package com.project.empservice.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Employeconfig {
	@Bean
	ModelMapper getModelMapper() {
		return new ModelMapper();
	}
	
}
