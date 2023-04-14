package com.login.sandeep;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Signup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer signId;
    public String username;
    public String password;
    public String fullname;
    public Integer age;
    public String gender;
    public String city;
    public String country;
    public String email;

}
