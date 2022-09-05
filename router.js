import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Nice Work router')
})

export default router;