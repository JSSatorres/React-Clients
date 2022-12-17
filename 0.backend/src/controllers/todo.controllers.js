import { Todo } from "../models/todo.model.js";

export const getTodos = async ( req,res) => {

  try {
    const todos = await Todo.find() 
    return res.status(200).json({ todos })
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}

export const createTodo = async ( req,res) => {
  try {
    const {completed, title} = req.body

    const todo = new Todo({ completed, title}) 
    await todo.save()
    return res.status(201).json({ todo })
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}

export const getOneTodo = async ( req,res) => {

  try {
    const {id} = req.params
    const oneTodo = await Todo.findById(id) 
    return res.status(200).json({ oneTodo })
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error one link"})
  }
}
export const deleteTodo = async ( req,res) => {

  try {
    const {id} = req.params
    const removeTodo = await Todo.findByIdAndDelete(id) 
    return res.status(200).json({ removeTodo })
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error one link"})
  }
}

export const updateTodo = async ( req,res) => {

  try {
    const {id} = req.params
    const {title } = req.body

    if (!todo) return res.status(400).josn({error:"does not exits todo"})
    const todo = await Todo.findByIdAndUpdate(id, {title} )

    return res.status(200).json({ todo })
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error one link"})
  }
}
