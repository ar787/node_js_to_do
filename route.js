const { Router } = require("express")
const router = Router()
const bodyParser = require("body-parser")
const Ticket = require("./todoConfig")
const todos = []
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post("/add_task", urlencodedParser, (req, res)=> {
    if(!req.body.value.trim()) {
        res.redirect("/")
    }else {
        todos.push(new Ticket(req.body.value.trim()))
        res.redirect("/")
    }
})

router.get("/remove_task/:id", (req, res) => {        
    todos.splice(req.params.id, 1)
    res.redirect("/")

})

router.get("/edit_task/:id", (req, res) => {
    res.render("edit", {taskDescription:todos[req.params.id].value, index:req.params.id})  
})

router.post("/edit_task/:id", urlencodedParser, (req, res) => {
    const id = req.params.id
    if(!req.body.newTaskValue.trim()) {
        res.redirect("/edit_task/"+id)
    }else {
        todos[id].value = req.body.newTaskValue
        res.redirect("/")
    }
})

router.get("/", (req, res) => {  
    res.render("index", {todos:todos})
    console.log(todos) 
}) 

 
module.exports = router 