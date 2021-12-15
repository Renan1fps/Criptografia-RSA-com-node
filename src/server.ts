import express from 'express';

const app = express();

app.use(express.json());

app.get('/teste', async(req, res)=>{
  res.json("funfou");
})

app.listen(8080, ()=> console.log("Running"));