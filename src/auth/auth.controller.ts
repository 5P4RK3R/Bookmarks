import { Controller, Post } from "@nestjs/common";
import AuthService from "./auth.service";

@Controller('auth')
class AuthController{
    constructor(private authService: AuthService){}

    @Post('signup')
    signup(){
        return 'signup'
    }

    @Post('signin')
    signin(){
        return 'signin'
    }
}
export default AuthController;