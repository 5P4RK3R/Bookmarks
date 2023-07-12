import AuthService from "./auth.service";
declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(): string;
    signin(): string;
}
export default AuthController;
