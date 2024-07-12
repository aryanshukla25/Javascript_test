const mongoose = require("mongoose");
const express = require("express")
const app = express();
mongoose.connect("mongodb+srv://admin:G8XLMkrvnwwUq3>@cluster0.kydgmkq.mongodb.net/")

const User = mongoose.model('Users',{name: String, email: String, password: String});

app.post("/signup", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email:username});
    if(existingUser){
        return res.status(400).send("Username already exists");

    }
    await User.create({name,email:username,password})
    const user = new User({
        name: name,
        email: username,
        password: password
    })

    user.save();
    res.json({
        "msg":  "User created Succesfully"
    })

})

