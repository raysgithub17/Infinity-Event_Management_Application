package corprate.rayhan.service;

import java.util.List;

import corprate.rayhan.model.User;
import corprate.rayhan.dto.request.RegisterRequest;
import corprate.rayhan.dto.response.RegisterResponse;
import corprate.rayhan.dto.response.UserDetailResponse;

public interface UserService {

    RegisterResponse register(RegisterRequest request);

    UserDetailResponse getUser(String email);

    List<User> getAllUser();
}
