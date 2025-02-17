let jwt = require("jsonwebtoken");

function isLoggedIn(req, res, next) {
    let token = req.headers.authorization;
    if(!token) return res.send("Please login");

    let decode = jwt.verify(token, "yahoo");
    if(!decode) return res.send("token invalid");

    req.user = decode;
    next()
}

module.exports = isLoggedIn;
// middleware req prr run hota hai before response 
// req res and next middleware three functions