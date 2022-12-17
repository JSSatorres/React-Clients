import express  from "express";
import {createTodo, updateTodo, getTodos, deleteTodo } from "../controllers/todo.controllers.js";


const todoRoutes = express.Router()

todoRoutes.post('/todo', createTodo)
todoRoutes.put('/todo/:id', updateTodo)
todoRoutes.get('/todo', getTodos)
todoRoutes.delete('/todo/:id', deleteTodo)


export default todoRoutes