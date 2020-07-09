package repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mypackage.model.LoginUser;
import com.mypackage.model.LoginUsers;

@Repository
public interface EmployeeRepository extends JpaRepository<LoginUser, Integer> {

	
	
	public LoginUser findByEmailId(String emailId);
	public LoginUser findByEmailIdAndPassword(String emailId, String password);
	
	 public boolean existsByEmailId(String emailId);
	
	

	
	
    }

