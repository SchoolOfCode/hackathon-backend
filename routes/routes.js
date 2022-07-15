import express from "express";
import { getAllTodos } from "../models/todos.js";


const router = express.Router();


router.get('/', (req, res) => {
    const data = getAllTodos()
    res.json({success: true, payload: data})})

    router.get(':/id', (req, res) => {
        console.log(req.params)
        const data = getTodoById(id)
        res.json({success: true, payload: data})})


    export default router;


    // get todos 

// 