package corprate.rayhan;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import corprate.rayhan.dto.request.RegisterRequest;
import corprate.rayhan.enumerated.Role;
import corprate.rayhan.service.UserService;

@SpringBootApplication
public class RayhanApplication {

	public static void main(String[] args) {
		SpringApplication.run(RayhanApplication.class, args);
	}


	// @Bean
	// public CommandLineRunner commandLineRunner(UserService userService)
	// {
	// 	return args->{
	// 		var user=RegisterRequest.builder()
	// 		.name("Admin")
	// 		.email("admin@gmail.com")
	// 		.role(Role.USER)
	// 		.password("Admin@123")
	// 		.build();
	// 		userService.register(user);
	// 	};
	// }

}
