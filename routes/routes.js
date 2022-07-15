import express from "express";
import { getAllTodos, getTodoById} from "../models/todos.js";

const router = express.Router();

router.get("/", (req, res) => {
  const data = getAllTodos();
  res.json({ success: true, payload: data });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = getTodoById(id);
  res.json({ success: true, payload: todo });
});

// router.post("/", function (req, res) {
//     const newTodo= req.body
//     const result = createTodo(newTodo)
//     res.json({ success: true, payload: result });
// })
 export default router;

// get todos

//
