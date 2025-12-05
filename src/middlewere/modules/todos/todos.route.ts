
import express from "express"
import { todosControls } from "./todos.contorls"


const route = express.Router()

route.post("/",todosControls.todosPosCreate)
route.get('/',todosControls.todosAllGets)
route.get('/:id',todosControls.getDotosSigles)
route.put("/:id",todosControls.todossInputss)
route.delete('/:id',todosControls.todosDeletes)



export const todosRoute =route