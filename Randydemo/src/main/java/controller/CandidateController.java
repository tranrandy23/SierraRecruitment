package controller;
import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import exception.ResourceNotFoundException;
import model.*;
import repository.CandidateRepository;


@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(path = "/")
public class CandidateController {

	@Autowired
	CandidateRepository canRepo;


	
	@GetMapping(path = "/candidates")
		 @CrossOrigin(origins = "http://localhost:4200")
		public List<Candidate> all() {
		List<Candidate> candidates = canRepo.findAll();
		return candidates;
		}
		
		 @CrossOrigin(origins = "http://localhost:4200")
		@PostMapping(path="/create", consumes = "application/json" , produces="application/json")
		public Candidate createCandidate(@Valid @RequestBody Candidate candidate)throws Exception {
			return canRepo.save(candidate);
		}
		 @DeleteMapping("/candidates/{id}")
		 void deleteEmployee(@PathVariable int id) {
			 canRepo.deleteById(id);
		 }
	/*	 @CrossOrigin(origins ="http://localhost:4200")  
		 @PutMapping("/candidates/{id}")
		  public ResponseEntity<Candidate> updateCandidate(@PathVariable("id") int id, @RequestBody Candidate candidate) {
			 System.out.println("Update candidate with ID = " + id + "...");
			// Candidate candidate1 = this.getEmployee(candidate.getId());
		    Optional<Candidate> candidateData = canRepo.findById(id);
		 
		    if (candidateData.isPresent()) {
		    Candidate	 candidate1 = candidateData.get();
		    //	 candidate.setId(candidate.getId());
		    	candidate1.setFirstName(candidate.getFirstName());
		    	candidate1.setLastName(candidate.getLastName());
		    	candidate1.setEmail(candidate.getEmail());
		    	candidate1.setPhoneNumber(candidate.getPhoneNumber());
		        candidate1.setQualification(candidate.getQualification());
		        candidate1.setAddress(candidate.getAddress());
		        candidate1.setDateOfBirth(candidate.getDateOfBirth());
		     
		      return new ResponseEntity<>(canRepo.save(candidate1), HttpStatus.OK);
		     
		    }   
		    else {
		      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		    }
		  }

		private Candidate getEmployee(Integer id) {
			// TODO Auto-generated method stub
			return null;
		}*/
		 @CrossOrigin(origins ="http://localhost:4200")  
		 @PutMapping(path="/create", consumes = "application/json" , produces="application/json")
		    public @Valid Candidate updateEmployee(
		         @Valid @RequestBody Candidate candidate) throws ResourceNotFoundException {
			 return canRepo.save(candidate);
		    }
}