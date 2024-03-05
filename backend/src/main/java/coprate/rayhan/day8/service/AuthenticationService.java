package corprate.rayhan.service;

import corprate.rayhan.dto.request.ForgotPasswordRequest;
import corprate.rayhan.dto.request.LoginRequest;
import corprate.rayhan.dto.request.RegisterRequest;
import corprate.rayhan.dto.response.ForgotPasswordResponse;
import corprate.rayhan.dto.response.LoginResponse;
import corprate.rayhan.dto.response.RegisterResponse;


public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request);

}
