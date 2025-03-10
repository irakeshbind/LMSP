const express = require('express')
const router = express.Router();

router.post('/signup',(req,res)=>{
    console.log(req.files)
    res.status(200).json({
        msg:'mmm'
    })
})



module.exports = router;