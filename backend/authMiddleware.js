require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({ })
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if(decoded.userId){
            req.userId = decoded.userId;
        } else{
            return res.status(403).json({ })
        }

        next();
    } catch (error) {
        return res.status(403).json({
            error: error
        })
    }
}

module.exports = {
    authMiddleware
}