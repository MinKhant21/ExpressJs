import express from 'express';
const app = express();

import router from './router';

//static file
app.use(express.static('assests'));

//router file
app.use(router);

//global middleware
app.use('/',(req,res,next)=>{
    console.log('Middleware fired')
    next();
})
app.use('/:id',(req,res)=>{
    console.log(req.params.id);
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server runner as port ${port}`)
})