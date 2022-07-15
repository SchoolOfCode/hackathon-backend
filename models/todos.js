// functions which are to do with getting the todos, posting them etc. 


import { Data } from "../db/data.js";

export function getAllTodos(){
    return Data;
}

export function getTodoById(id){
const found = Data.find(function (todo){
    return todo.id===id;
})
return found;
}

// export function createTodo(todo){
//     Data.push(todo)
//     return Data;
//}