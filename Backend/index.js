import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors"; //? ################### isko agar nahi use karenge toh frontend koi or port pe chlega and backend koi or port pe. ###################

import userRoute from "./routes/user.route.js"



const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());  //? ###################  ab cors use kr liye hai bhai toh frontend and backend ka alag-alag port pe chlne ka pareshani khtm ho gaya bhai. Thik na 


const PORT = process.env.PORT || 5050;
const DigiSamvaad_URI = process.env.MONGODB_URI;

try {
    mongoose.connect(DigiSamvaad_URI);
    console.log("MongoDB Connect ho gaya hai bhai");
}
catch (error) {
    console.log(error);
}




// routes
app.use("/user", userRoute);


app.get('/', (req, res) => {
    res.send('Tathagat Priyadarshi Project ka Project');
});


app.listen(PORT, () => console.log(`Server bhi chal raha hai port ${PORT} pe`))
export default app;

