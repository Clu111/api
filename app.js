const express = require("express")
const bodyParser = require("body-parser")
const pageContacts = require("./about_me")
const app = express();
const pageContacts1 = require("./gruzoTaxi")
const pageContacts2 = require("./kategoria")
const pageContacts3 = require("./price")
app.use(bodyParser.urlencoded({extended:false}))
app.get('/aboutME', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts)
    response.json(student)
})
app.get('/contact', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts1)
    response.json(student)
})
app.get('/gruzoTaxi', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts2)
    response.json(student)
})
app.get('/price', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts3)
    response.json(student)
})
app.listen(8000,()=>{
    console.log("8000 port")
})