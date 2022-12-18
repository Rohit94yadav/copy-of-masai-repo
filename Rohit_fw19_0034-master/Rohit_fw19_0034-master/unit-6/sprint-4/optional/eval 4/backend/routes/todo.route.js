const express=require("express");
const {TodosController}=require("../controllers/Todo.controller");
const {Authentication}=require("../middlewares/Authentication")

const TodosRouter=express.Router();
TodosRouter.post('/add',Authentication,TodosController.AddTodos)
TodosRouter.get('/',Authentication,TodosController.GetTodos)
TodosRouter.patch('/update/:id',Authentication,TodosController.UpdateTodos)
TodosRouter.delete('/delete/:id',Authentication,TodosController.DeleteTodos)


module.exports={
    TodosRouter
}