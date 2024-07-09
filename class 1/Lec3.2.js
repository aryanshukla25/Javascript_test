const express = require ("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
    {
        username: "aryanshukla25@gmail.com",
        password: "123321",
        name: "Aryan Shukla"
    },
    {
        username: "ramansingh2@gmail.com",
        password: "123456",
        name : "Raman Singh"
    },
    {
        username: "priyakumari14@gmail.com",
        password: "474747",
        name: "Priya Kumari"
    }
];

function userExists(username,password){
    let userExist = false;
    for (let i=0;i<ALL_USERS.length();i++){


        if (ALL_USERS[i].username == username and ALL_USERS[i].password == password){
            userExist=true;
        }
        
    }
    return userExist;

}

app.post("signin",function (req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User does doesnt exist in our memmory db",

        });
    }
    var token = jwt.sign({username: username},jwtPassword);
    return res.json({
        token,
    })
})


app.get("/users",function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded =jwt.verify(token,jwtPassword);
        const username =decoded.username;

    }catch(err){
        return res.status(403).json({
            msg:"Invalid token",
        });
    }

});

app.listen(3000);