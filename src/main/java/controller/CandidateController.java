package controller;
import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
	
		@RequestMapping(value = "/candidates", method = RequestMethod.GET, produces = "application/json")
		public List<Candidate> firstPage() {
		List<Candidate> candidates = canRepo.findAll();
		return candidates;
		}
		
		@PostMapping(path="/create" , consumes = "application/json" , produces="application/json")
		
		public Candidate createCandidate(@Valid @RequestBody Candidate candidate) {
			return canRepo.save(candidate);
		}
	}

	

