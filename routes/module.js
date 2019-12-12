const router = require('express').Router()
const FullPost = require('../models/fullpost')


function compare(a,b){
    if ( a.rank < b.rank ){
        return -1;
      }
      if ( a.rank > b.rank ){
        return 1;
      }
      return 0;
}


router.get('/:title',(req,res) => {
    
    const title  = req.params.title

    FullPost.find({title : title})
    .then(result => {

        for(let key in result){
            result[key].subPosts.sort(compare)
        }

        res.send(result)

    })
    .catch(err => {
        console.log(err)
    })
    
})

router.post('/',(req,res) => {

    const post = new FullPost({
        title : req.body.title,
        text : req.body.text,
        subPosts : req.body.subPosts

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