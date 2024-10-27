import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; //! ----- MongoDB me jo password dikh jaa rha tha usko hide krne ke liye.


export const signup = async (req, res) => { //naam hai babu iss function ka 'signup". Smjha na. //? or isko async me daale hai or neeche "user" and "newUser" ko await me daalenge. <------ Ye important funda hai babu
    try {
        const { name, email, password, confirmpassword } = req.body;

        if (password !== confirmpassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }


        const user = await User.findOne({ email });  // ye "findOne" MongoDB ka jo property hai usi ko use kiye hai.....//? isko await me daale hai kaheki upar "signup" ko async kr diye hai.  <------ Ye important funda hai babu
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }

        

        //? ------------------- yaha v "teen" jagah me await daale hai. Thik na.  <------ Ye important funda hai babu -------------------
        //! ------ Hashing the Password ------
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await new User({ name, email, password }); 
        await newUser.save().then(() =>
            res.status(201).json({ message: "Account created successfully", user })//status code jo yaad kiye hai usi me kuchh ka use kiye hai.
        );
        //? ----------------------------------------------------------------------------------------------------------------
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }

};