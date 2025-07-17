import jwt from "jsonwebtoken";



export const generateTokenForUser = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{ 
        expiresIn: "7d",
    });

    res.cookie("Token", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "Lax",
        secure: false,
    });
    return token;
}

