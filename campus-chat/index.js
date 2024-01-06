import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.route.js';
import recipeRoute from './routes/recipe.route.js';

const app = express();
dotenv.config();

mongoose.set('strictQuery', true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('Connected to mongodb')
  } catch (error) {
    console.log(error)
  }
}
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: ['http://localhost:5173', 'https://main.d2yykcyab2dkig.amplifyapp.com'], credentials: true}))

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/recipe', recipeRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!"

  return res.status(errorStatus).send(errorMessage)
})

app.listen(8000, () => {
  connect()
  console.log('Server running')
})
