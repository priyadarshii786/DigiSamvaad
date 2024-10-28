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
                .json({ message: "Account created successfully", newUser });
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
    const { email, password } = req.body; //* --------- iska mtlb hai ki "req.body" se email and password le rhe. Ab dekh bhai itna detail me likhe pad rha hai ki dimaag kharab ho gaya hai. Ye sb 1 ghanta me likh ke rkh dete hm or tum itna time le rha. "req.body" bole toh Postman se abhi daalna hai sb detail ie; email nd password.
    try {
        //async or await ka use fir se dekh lena bhai yaha.
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(404).json({ message: "Invalid Username or Password" });
        }
        createTokenAndSaveCookie(user._id, res); //? --------- ab yaha pe token generate krwa rhe hai, yaani jb user login kre toh uske pass token rhna chahiye. Theek na.
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
//? ------------ Logout ke liye simple funda rhega bhai ki jo token signup ke time genrate hua tha(arey whi token jisse login kr rhe the, mtlb signup ke time jo token mila tha na whi login ke waqt v rhega) toh usko delete kr denge. Toh na rhega token na user kr paayega login, or logout v ho jaayega. Smjha?

//* ------------ ab bhai ye function bana denge fir isko route ke andar import krwa lenge. lie above two. simple.


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