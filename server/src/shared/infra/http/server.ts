import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import '../typeorm';
import routers from './routes';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

app.listen(3333, () => {
  console.log('🐱‍🏍 Server Started on port 3333');
});
