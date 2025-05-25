import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: { // Corrected field name
        type: String,
        required: true,
    },
});

const Contact = model("Contact", contactSchema);

export default Contact;