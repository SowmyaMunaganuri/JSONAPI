const express=require('express');
const router=express.Router();
var arr=[
    {id:1 , name:"Sowmya"},
    {id:2, name:"Yashu"},
    {id:3, name:"Akhil"}]
router.get('/',(req,res)=>{
    res.json(arr)
});

router.post('/post',(req,res)=>{
    
    arr.push({id:req.body.id , name: req.body.name})
    console.log(arr)
    res.json(arr)
})

module.exports=router;