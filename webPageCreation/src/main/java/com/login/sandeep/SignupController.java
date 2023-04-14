package com.login.sandeep;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("signup")
@CrossOrigin
public class SignupController {

    @Autowired

    public SignupRepository signupRepo;

    @GetMapping
        public List<Signup> getSignup(){

          return  signupRepo.findAll();
            
        }
    
    @PostMapping
    public void add(@RequestBody Signup signup){
         signupRepo.save(signup);
    }
    
}
