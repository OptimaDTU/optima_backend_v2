const router = require('express').Router()
const Posts  = require('../models/post').Post

function compare(a,b){
    if ( a.rank < b.rank ){
        return -1;
      }
      if ( a.rank > b.rank ){
        return 1;
      }
      return 0;
}

router.get('/',(req,res) => {
    
    Posts.find()
    .then(result => {

        for(let key in result){
            result[key].subtopics.sort(compare)
        }

        res.send(result)

    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/',(req,res) => {

    const post = new Posts({
        title : req.body.title,
        subtopics : req.body.subtopics

    })

    post.save()
    .then((p) => {
        res.send(p)
    })
    .catch(err => {
        res.send(err)
    })    

})

module.exports = router