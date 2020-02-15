const express= require("express");
const app=express();

app.use(express.json({extended:false}));
app.use('/api/user',require('./routes/api/user'));
app.get('/',(req,res)=>{
    res.send("API running");
});
const PORT= 5000|| process.env.PORT;
app.listen(5000,()=>console.log(`Console started on ${PORT}`));