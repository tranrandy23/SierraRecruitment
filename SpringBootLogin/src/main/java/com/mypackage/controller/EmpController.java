package com.mypackage.controller;

import java.util.List;

import javax.validation.Valid;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mypackage.model.LoginUser;

import exception.EmployeeNotFoundException;
import repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/")
public class EmpController {

	@Autowired
	EmployeeRepository repository;

	EmpController(EmployeeRepository repository) {
		this.repository = repository;
	}

	// Aggregate root

	@GetMapping("/register")
	List<LoginUser> all() {
		return repository.findAll();
	}
	
	@PostMapping(path="/register" , consumes = "application/json" , produces="application/json")
	 @CrossOrigin(origins = "http://localhost:4200")
	LoginUser newEmployee(@Valid @RequestBody LoginUser newEmployee) throws Exception {
		
		String tempEmailId = newEmployee.getEmailId();
	//	 LoginUser userLogin =  repository.findByEmailId(tempEmailId);
		 repository.existsByEmailId(tempEmailId);
		if (  repository.existsByEmailId(tempEmailId) ) {
			
			
				 throw new Exception ("user with this email id is already exist");
			 }
		return repository.save(newEmployee);
		
	}

	// Single item

	@GetMapping("/register/{id}")
	LoginUser one(@PathVariable int id) {

		return repository.findById(id).orElseThrow(() -> new EmployeeNotFoundException(null, null, id));
	}

	@PutMapping("/register/{id}")
	LoginUser replaceEmployee(@RequestBody LoginUser newEmployee, @PathVariable int id) {

		return repository.findById(id).map(employee -> {
			employee.setUserName(newEmployee.getUserName());
			employee.setEmailId(newEmployee.getEmailId());
			
			employee.setPassword(newEmployee.getPassword());
		
			
			return repository.save(employee);
		}).orElseGet(() -> {
			newEmployee.setId(id);
			
			return repository.save(newEmployee);
			
		});
	}

	 @DeleteMapping("/register/{id}")
	 void deleteEmployee(@PathVariable int id) {
	 repository.deleteById(id);
	 }
	 
	
		 
	 @GetMapping("/login")
	 public LoginUser fetchUserByEmailIdAndPassword(String email,String password){
		 
		 return repository.findByEmailIdAndPassword(email, password);
	 }
	 
	 @CrossOrigin(origins = "http://localhost:4200")
	 @PostMapping(path="/login")
	 public LoginUser loginUser(@RequestBody LoginUser user) throws Exception {
		 String tempEmailId = user.getEmailId();
		 String tempPass = user.getPassword();
		 LoginUser userObj= null;
		 if (tempEmailId != null && tempPass != null) {
			 userObj = repository.findByEmailIdAndPassword(tempEmailId,tempPass);
		 
		 }
		 
		 if (userObj == null) {
			 throw new Exception("Bad credentials");
		 }
		 
		 return userObj;
		
	 }
 }
