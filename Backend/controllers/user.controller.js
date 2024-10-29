import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

//! ------------------------------------------------------------------------------
export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;

        if (password !== confirmpassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }


        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await new User({ name, email, password: hashedPassword });
        await newUser.save()
        if (newUser) {
            createTokenAndSaveCookie(newUser._id, res); //* -------- iss function me user ka ID (jo ki mongoDB database me dikhega) and res pass kr rhe hai.
            res
                .status(201)
                .json({
                    message: "Account created successfully", user: {
                        _id: newUser._id,
                        name: newUser.name,
                        email: newUser.email
                    },
                });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }

};
//! ------------------------------------------------------------------------------

//! ------------------------------------------------------------------------------
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        //async or await ka use fir se dekh lena bhai yaha.
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(404).json({ message: "Invalid Username or Password" });
        }
        createTokenAndSaveCookie(user._id, res);
        res
            .status(201)
            .json({
                message: "User Logged In Successfully",
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                },
            });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });

    }
};



//! ------------------------------------------------------------------------------

//! ------------------------------------------------------------------------------

export const logout = async (req, res) => {
    try {
        res.clearCookie('jwt'); //* ------- Token ka naam "jwt" rkhe the, hai na, toh usi ko clear kr rhe.
        res.status(200).json({ message: "User Logged Out Successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}

//! ------------------------------------------------------------------------------