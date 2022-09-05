import express from "express";

const app = express();

app.get('/',(req,res)=>{
    console.log('hello');
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server runner as port ${port}`)
})