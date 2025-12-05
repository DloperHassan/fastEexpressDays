 import express, { Request, Response } from "express";
import logers from "../../logger";
import { pool } from "../../../config/DB";
import { usersControlls } from "./user.conterol";
import privetAuth from "../../auth";


 const router = express.Router()

 

 router.post('/',usersControlls.createUsers)

 router.get('/',logers,privetAuth("admin", ), usersControlls.getUsers)
 router.get("/:id",logers,privetAuth("admin","user"),usersControlls.getSingleUsersControls)
 router.put("/:id",usersControlls.getUpdateUsers)
 router.delete("/:id",usersControlls.getDeleteUser)

 

 export const userRouter = router

