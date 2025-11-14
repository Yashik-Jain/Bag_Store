const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
const path = require("path")
const db = require("./config/mongoose-connection.js")
const ownersRouter = require("./routes/ownersRouter.js")
const productsRouter = require("./routes/productsRouter.js")
const UsersRouter = require("./routes/usersRouter.js")
const expressSession = require("express-session")
const flash = require("connect-flash")

require("dotenv").config();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))
app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());
app.set("view engine","ejs")

app.get("/",(req,res)=>{
res.send("Hello from Server..")
})

app.use("/owners",ownersRouter)
app.use("/products",productsRouter)
app.use("/users",UsersRouter)

app.listen(3000,()=>{
    console.log("Server Running on port 3000..")
})