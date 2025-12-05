
 import express, { NextFunction, Request, Response } from'express'
 import {Pool, Result} from "pg"
 import dotenv from 'dotenv';
 import path from 'path';
import config from './config';
import initDB, { pool } from './config/DB';
import logers from './middlewere/logger';
import { userRouter } from './middlewere/modules/users/users.routes';
import { todosRoute } from './middlewere/modules/todos/todos.route';
import { authRouth } from './middlewere/modules/auth/auth.routes';


 dotenv.config({path:path.join(process.cwd(),".env")})
const app = express()
const port = config.port

// Database Pool COnect
 
initDB()



// use parse
app.use(express.json())

// urlEncoded
// app.use(express.urlencoded())

app.get('/', (req:Request, res:Response) => {
   res.send('Hello World Next Level web Developers')
 } )
app.use("/users",userRouter)

app.use("/users",userRouter)

// dynamic id 

app.use("/users",userRouter)

app.use("/users",userRouter)

app.use("/users",userRouter)

// crud todos 

app.use("/todos",todosRoute);

app.use("/todos",todosRoute);

// Get single todo
app.use("/todos",todosRoute);

// Update todo
app.use("/todos",todosRoute);

// Delete todo
app.use("/todos",todosRoute);

// auth Route

app.use("/auth",authRouth)

app.use((req,res) => {
  res.status(404).json({
    success:false,
    message:'Route Note Found',
    data:req.path
  })
})


export default app
