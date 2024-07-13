const express = require ("express");
const { realpath } = require("fs");
const app = express();
app.get("/health-checkup",function(req,res){
    res.send("your heart is healthy")
})
Abhi idhar kuch check nhi kr rhe 
1.) Auth checks? Does the user have enough money to visit the Doctor 
2. Ensure input is the right form or is valid 


-------------------------------------------------------------------------------------------------------
1. Users need to send the query params which should be a number from 1-2
2. Users should send a username and password in the header 

localhost3000?n=3000 yeh n is a query parametr

-------------------------------------------------------------------------------------------------------

const express = require ("express");
const { realpath } = require("fs");
const { it } = require("node:test");
const app = express();
app.get("/health-checkup",function(req,res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username!=harkirat or password !="pass"){
        res.status(403).json({
            msg:"user doesnt exist",
        });
        return;
    }
    if (kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg: "User doesnt exist",
        });
        return ;
    }
})
Ugly way of writing it
--------------------------------------------------------------------------------------------------------------------

3 ways of sending input
a. through query param 
b. through headers 
c. through body 

--------------------------------------------------------------------------------------------------

const express = require ("express");
const { realpath } = require("fs");
const { it } = require("node:test");
const app = express();
app.put("/health-checkup",function(req,res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username!=harkirat or password !="pass"){
        res.status(403).json({
            msg:"user doesnt exist",
        });
        return;
    }
    if (kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg: "User doesnt exist",
        });
        return ;
    }
})

Another way writing an ugly code 

------------------------------------------------------------------------------------------------------
Middle ware types
1. Rate Limiter 
2. Get number of Request 
3. Next use kr ke 

let numberOfRequest = 0;

function calculateRequest(req,res,next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next;
}

app.get("/endpoint",calculateRequest,function(req,res){

})

-----------------------------------------------------------------------------------------------------------

function userMiddleware(req,res,next){
    if(username!="harkirat" && password!="pass"){
        res.status(403).json({
            msg: "Incorrect inputs".
        });
    }
    else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    if(kidneyId!=1 && kidneyId !=2){
        res.status(403).json({
            msg: "Incorrect inputs",

        })
    }
    else{
        next();
    }
};
app.get(){

}
--------------------------------------------------------------------------------------------------

app.use()

iska istemal tab krte hai jab by default kisi route pe koi middleware lagana padta hai

