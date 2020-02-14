const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.json([
        {id:1 , name:"Sowmya"},
        {id:2, name:"Yashu"},
        {id:3, name:"Akhil"}
    ])
});

module.exports=router;