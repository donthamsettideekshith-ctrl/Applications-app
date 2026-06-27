package com.project.empservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "admin")
@Data
public class Admin {

    @Id
    private Integer id;

    private String username;

    private String password;
}