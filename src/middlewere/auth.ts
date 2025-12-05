// higher order fuction return korbe function k
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const privetAuth = (...roles:string[]) => {
  return (req:Request,res:Response, next:NextFunction) => {
    try {
          const token =req.headers.authorization
    if (!token) {
      return res.status(500).json({message:"you Are Not Allow!!!"})
    }
    const decode =  jwt.verify(token,config.jswSecret as string)as JwtPayload
    req.user = decode 
    console.log("decodet :",decode);
    console.log("Token Ache",token);
    // admin
    if (roles.length && !roles.includes(decode.role as string)) {
      return res.status(500).json({
        error:"unauthorized"
      })
    }
    next()
      
    } catch (err:any) {
      res.status(500).json({
        success:false,
        message:err.message
      })
    }
    
  }
}

export default privetAuth
