import { Router } from "express";
import { authControls } from "./auth.control";

const route =Router()

// https://localhost:3000/auth/login
route.post("/login",authControls.loginUsers)





export const authRouth = route