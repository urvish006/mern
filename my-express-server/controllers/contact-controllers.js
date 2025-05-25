import Contact from "../contact/contact-model.js";

const contactForm = async (req, res) => {
    try {
        const { username, email, message } = req.body;

        if (!username || !email || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        await Contact.create({ username, email, message });
        return res.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default contactForm;