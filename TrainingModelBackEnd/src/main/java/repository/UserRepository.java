package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import bean.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
