const express= require("express");
const app=express();
const PORT= 3000|| process.env.PORT;

app.use('/api/user',require('./routes/api/user'));
app.get('/',(req,res)=>{
    res.send("API running");
});
app.listen(PORT,()=>console.log(`Console started on ${PORT}`));