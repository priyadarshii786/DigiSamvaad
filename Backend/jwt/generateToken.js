import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        httpOnly: true, // ye protect krega bhai "xss" attack se.
        secure: true,
        sameSite: "strict",// ye protect krega bhai "csrf" attack se.
    });

};

export default createTokenAndSaveCookie; // ------- Token generate ho gaya toh ab isko export kr de rhe hai babu.