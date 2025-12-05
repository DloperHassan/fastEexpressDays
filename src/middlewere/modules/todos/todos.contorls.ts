 
  import express, { NextFunction, Request, Response } from'express'
import { pool } from "../../../config/DB";
import { todosService } from "./todos.services";
 

const todosPosCreate =  async (req: Request, res: Response) => {
//   const { user_id, title } = req.body;

  try {
    const result = await  todosService.createTodos(req.body)
    res.status(201).json({
      success: true,
      message: "Todo created",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

const todosAllGets = async (req: Request, res: Response) => {
  try {
    const result = await  todosService.getTodos()
    res.status(200).json({
      success: true,
      message: "todos retrieved successfully",
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      datails: err,
    });
  }
}

const getDotosSigles = async (req:Request, res:Response) => {
  try {
    const result = await todosService.getTodosSingle(req.params.id!)
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch todo" });
  }
}

const todossInputss = async (req:Request, res:Response) => {
  const { title, completed } = req.body;

  try {
    const result = await  todosService.toodosInputs(title,completed,req.params.id as string)

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update todo" });
  }
}

const todosDeletes =  async (req:Request, res:Response) => {
  try {
    const result = await todosService.todosdelete(req.params.id as string)

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json({ success: true, message: "Todo deleted", data: null });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete todo" });
  }
}

 
export const todosControls={
    todosPosCreate,
    todosAllGets,
    getDotosSigles,
    todossInputss,
    todosDeletes
}