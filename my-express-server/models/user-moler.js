import mongoose from "mongoose";
import bcrypt from "bcrypt";    
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Hash password before saving to the database
// userSchema.pre("save", async function(next) {
//     if (this.isModified("password")) {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//     }

//     next();
// });

// Compare password method


userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//JWT

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET, {
            expiresIn: "1d",    
        }
        );
    
    } catch (error) {
    console.log(error);
}
}

const User = mongoose.model("User", userSchema);
export default User;