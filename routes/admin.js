
const router = require('express').Router()

require('dotenv').config()

router.get('/isAdmin',(req,res,next) => {
    
    if(req.cookies.optima_auth === process.env.SECRET){
        return res.json({isAdmin : true})
    }

    return res.json({isAdmin :false})
})


router.post('/login',(req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    if(email === process.env.EMAIL){
        if(password === process.env.PASSWORD){
            res.cookie('optima_auth',process.env.SECRET)
            res.status(200).send({
                loginSuccess : true
            })
        }else{
            res.json({
                loginSuccess : false
            }) 
        }
    }else{
        res.json({
            loginSuccess : false
        })
    }



   
})

module.exports = router