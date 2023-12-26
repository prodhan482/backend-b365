import express from 'express';
import registerUser from './controllers/userController'; // Import the user registration controller

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Define other routes as needed for your application
// ...

export default router;
