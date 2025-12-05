import { pool } from "../../../config/DB";
import initDB from '../../../config/DB';
import bcrypt from "bcryptjs";


const createUsers = async (payload:Record<string,unknown>) => {
       const {name,role,email,password,age,phone,address} = payload
       const hasspass = await bcrypt.hash(password as string , 10) 
      const result = await pool.query(
       `INSERT INTO users(name,role,email,password,age,phone,address) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
       [name,role,email,hasspass,age,phone,address]
     );
     return result
}
const getUser = async () => {
 const resut = await pool.query(`SELECT * FROM users`)
 return resut
}
const sigleUsers = async (id:string) => {
   const result = await pool.query(`SELECT * FROM users WHERE id =$1`,[id])
   return result
}

const updateUsers =async (name:string,email:string,id:string) => {
  const result = await pool.query(`UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`, [name,email,id])
  return result
}

const deleteUsers =async (id:string) => {
  const result = await pool.query(`DELETE FROM users WHERE id =$1`,[id])
  return result
}




export const userService ={
    createUsers,
    getUser,
    sigleUsers,
    updateUsers,
    deleteUsers
}