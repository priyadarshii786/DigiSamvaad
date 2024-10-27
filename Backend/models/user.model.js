import mongoose from "mongoose";

// Bhai template bana diye hai database ka. Dekh lo
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        require: true
    },

    confirmpassword: {
        type: String,
        require: true
    }


}, {
    timestamps: true, //kb update hua and kb create hus uske liye.
});



const User = mongoose.model("User", userSchema); // Template ka model v bana diye hai bhai. Dekh lena //? ------ or yhi jo yaha "User" hai vo wha MongoDB me "users" ke naam me rhega. Dhyaan dena.
export default User;    