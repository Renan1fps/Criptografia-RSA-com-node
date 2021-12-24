import express from 'express';
import { EncryptClass } from './service';

const app = express();

app.use(express.json());

app.get('/status', async (req, res) => {
  res.json({message: "API running"});
})

app.get('/generate', async (req,res) => {
  const data = { message: 'tetse'}
  await EncryptClass.generateKeys();
  res.send("ok")
})

app.get('/encrypt', async (req, res) => {
 const response = await EncryptClass.encryptData();
  res.send(response);
})

app.post('/decrypt', async (req, res) => {
 const response = await EncryptClass.decript(req.body.data, req.body.key);
 res.send(response);
})

app.listen(8080, () => console.log("Running"));
