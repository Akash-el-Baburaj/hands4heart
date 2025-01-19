export interface login {
    phone: string;
    code: string;
}

export interface register {
    name: string;
    email: string;
    phone: string;
    code: string;
}

export interface otpVarification {
    otp: string;
    otpKey: string;
}