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
@RequestMapping("login")
@CrossOrigin
public class LoginController {

    @Autowired
    LoginRepository loginRepo;

    @GetMapping
    public List<Login> getLogin(){
        return loginRepo.findAll();
    }

    @PostMapping
    public void add(@RequestBody Login login){
        loginRepo.save(login);
      //  return 
        
    }

    
}
