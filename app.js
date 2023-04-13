const express= require("express")
const app = express()
const path= require("path")
const router= express.Router()

//seting up the view engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))


//setting up the static files
app.use(express.static(path.join(__dirname, "public")))

//setting up the routes

const indexRouter= require("./routes/index")
//setting up the routes
app.use("/", indexRouter)


//setting up the server
app.listen(3000, ()=>{
    console.log("server is running on port 3000")
}
)

