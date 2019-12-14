const express = require('express')
const bodyParser = require('body-parser')
const mongoose  = require('mongoose')
const cookieParser = require('cookie-parser')

const blogsRoute = require("./routes/blogs")
const moduleRoute = require('./routes/module')
const AdminnRoute = require('./routes/admin')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods','*')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next()
})


app.use("/blogs",blogsRoute)
app.use('/module',moduleRoute)
app.use('/admin',AdminnRoute)




mongoose.connect('mongodb://localhost:27017/optima')
.then(() => {
    app.listen(process.env.PORT || 3010,() =>{
        console.log("server started")
    })
})
.catch(err => {
    console.log(err)
})


