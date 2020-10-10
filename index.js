const express = require("express")

const path = require("path")
const router = require("./route")

const app = express()



app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'))

app.use(router)
app.use(express.static(path.join(__dirname, "public")));



app.listen(5000, function () {
    console.log("Server is started...")
})