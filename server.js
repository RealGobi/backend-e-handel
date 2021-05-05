import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserRoute from './routes/UserRoutes.js';

dotenv.config();
const { PORT } = process.env;

const app = express();
  app.use(morgan('common'));
  app.use(express.json());


const isOrderPaidFor = (req, res, next ) => {
console.log('yes, its been paid');
  next();
};

app.get("/order", isOrderPaidFor, (req, res) => {
  res.send('Order accepted')
})

UserRoute.routes(app);

const notFound = (req, res, next) => {
  const error = new Error(`URL not found ${req.originalUrl}`);
  res.status(404);
  console.log(error);
  next(error);
};

app.use(notFound);
app.listen(PORT, ()=> {
  console.log('✔️ Servern körs på '+ PORT);
});
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Connected to db'))
.catch((error)=> {
  console.log('error');
  process.exit();
});


