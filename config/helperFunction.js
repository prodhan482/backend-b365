import jwt from "jsonwebtoken";

const {sign} = jwt

// Generate Token
export function generateToken(id) {
    return sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

export function generateOTP() {
    // Generate a random 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000);
}