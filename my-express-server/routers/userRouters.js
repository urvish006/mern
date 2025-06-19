import express from 'express';
import Authcon from '../controllers/Auth-Controllers.js'; // Import the controller
import signupSchema from '../velidetor/auth-velidator.js';
import validate from '../middleware/validator-middleware.js';
const router = express.Router();


router.get('/home', Authcon.home);
router.post('/register',validate(signupSchema),Authcon.register)
router.post('/login', Authcon.login)


export default router; // Export the router to be used in the main server file