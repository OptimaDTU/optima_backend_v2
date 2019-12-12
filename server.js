const express = require('express')
const bodyParser = require('body-parser')
const mongoose  = require('mongoose')

const blogsRoute = require("./routes/blogs")
const moduleRoute = require('./routes/module')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','*')
    res.setHeader('Access-Control-Allow-Headers','*')

    next()
})

app.use("/blogs",blogsRoute)
app.use('/module',moduleRoute)

app.get("/",(req,res) => {
    res.send("<h1>Hello</h1>")
})

mongoose.connect('mongodb://localhost:27017/optima')
.then(() => {
    app.listen(process.env.PORT || 3010,() =>{
        console.log("server started")
    })
})
.catch(err => {
    console.log(err)
})


