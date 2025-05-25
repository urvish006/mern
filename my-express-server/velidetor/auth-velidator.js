import z from "zod";

const signupSchema = z.object({
    username: z
        .string({ required_error: "Username is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters long" })
        .max(20, { message: "Name must be at most 20 characters long" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email format" })
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Email must be a valid format" })
        .regex(/^(?!.*@tempmail\.com$)/, { message: "Temporary email addresses are not allowed" }),

    phone: z
        .string({ required_error: "Phone number is required" })
        .trim()
        .length(10, { message: "Phone number must be exactly 10 digits" })
        .regex(/^\d+$/, { message: "Phone number must contain only digits" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, { message: "Password must be at least 6 characters long" })
        .max(20, { message: "Password must be at most 20 characters long" }),
});

export default signupSchema;