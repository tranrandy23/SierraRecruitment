package controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import bean.FeedbackData;

import bean.User;
import bean.UserFeedback;
import bean.UserWrapper;
import repository.UserRepository;
import service.AppService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/")
public class AppController {
	
	@Autowired
	private AppService as;
	
	@Autowired
	private UserRepository repo;
	
	@PostMapping(path="/create" , consumes="application/json", produces="application/json")
	@ResponseBody
	public List<String> createUser(@RequestBody UserWrapper userlist) {
		List<String> response = new ArrayList<String>();
		
		for(User u: userlist.getUsers()) {
			repo.save(u);
			
			UserFeedback uf = new UserFeedback();
			uf.setId(u.getId());
			uf.setWeek1("null");
			uf.setWeek2("null");
			uf.setWeek3("null");
			uf.setWeek4("null");
			as.addUser(uf);
			response.add("Save users: " + u.toString());
		}
		return response;
	}
	
	@GetMapping(path="/userlist", produces="application/json")
	public List<User> getAllUsers() {
		return as.getAllUser();
	}
	
	@PutMapping(path="update/{id}")
	public UserFeedback updateFeedback(@PathVariable(value="id") int id,  @Valid @RequestBody FeedbackData fbdata) {
		return as.update(id, fbdata);
	}
	
	@GetMapping(path="/viewfeedback/{id}", produces="application/json")
	public String getFeedback(@PathVariable(value="id") int id) {
		return as.getAllFeedback(id);
	}

}
