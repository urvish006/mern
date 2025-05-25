import express from 'express';
import contactForm from '../controllers/contact-controllers.js'; 

const router = express.Router();

router.route('/contact').post(contactForm); // Changed `.get` to `.post` for form submission

export default router;