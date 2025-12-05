import { Request, Response } from "express";
import { pool } from "../../../config/DB";
import { userService } from "./user.services";


const createUsers = async(req:Request,res:Response) => {
//    const {name,email,age,phone,address} = req.body 
       try {
     const result = await userService.createUsers(req.body)
     console.log(result.rows[0]);
   res.status(201).json({
       success:false,
       message: "dat inserted successfully",
       data:result.rows
     })
     
   } catch (err:any) {
     res.status(500).json({
       success:false,
       message:err.message
     })
   }
      
 }

 const getUsers =async (req:Request,res:Response) => {
   try {
     const resut = await  userService.getUser()
     res.status(201).json({
       success:true,
       message:"Users Retrieved seuccessfully",
       data:resut.rows
     })
   } catch (err:any) {
     res.status(500).json({
       seccess:false,
       message:err.message,
       datails:err
     })
   }
 }

 const getSingleUsersControls = async (req:Request,res:Response) => {
 try {
  const result = await userService.sigleUsers(req.params.id!)
  if (result.rows.length === 0) {
    res.status(404).json({
      success:false,
      message:"User Not Found...."
    })
  } else {
      res.send(result.rows)
  }
 } catch (err:any) {
   res.status(500).json({
      seccess:false,
      message:err.message,
      datails:err
    })
 }
  
}
const getUpdateUsers = async (req:Request,res:Response) => {
  const {name,email} =req.body
 try {
  const result = await  userService.updateUsers(name,email,req.params.id as string)
  if (result.rows.length === 0) {
    res.status(404).json({
      success:false,
      message:"User Not Found...."
    })
  } else {
    massage:"user Update Successpuffly"
      res.send(result.rows)
  }
 } catch (err:any) {
   res.status(500).json({
      seccess:false,
      message:err.message,
      datails:err
    })
 }
  
}

const getDeleteUser = async (req:Request,res:Response) => {
 try {
  const result = await  userService.deleteUsers(req.params.id as string)
  console.log("result : " , result);
  if (result.rowCount === 0) {
    res.status(404).json({
      success:true,
      message:"user Not Found"
    })
  } else {
       res.status(500).json({
      seccess:false,
      message:" user Delete Successfully ",
      data:result.rows[0]
       
    })
  }
 } catch (err:any) {
   res.status(500).json({
      seccess:false,
      message:err.message,
      datails:err
    })
 }
  
}
 

 export const usersControlls = {
    createUsers,
    getUsers,
    getSingleUsersControls,
    getUpdateUsers,
    getDeleteUser,
 }