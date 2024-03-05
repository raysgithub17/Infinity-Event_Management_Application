package corprate.rayhan.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import corprate.rayhan.model.User;

public interface UserRepository extends JpaRepository<User , String> {

    Optional<User> findByEmail(String email);

}

