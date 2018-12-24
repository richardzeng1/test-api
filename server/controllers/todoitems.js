const TodoItem = require("../models").TodoItem;

module.exports = {
    create(req, res){
        return TodoItem.create({
            content: req.body.content,
            todoId: req.params.todoId
        }).then(todoItem => res.status(201).send(todoItem))
        .catch(error => res.status(400).send(error))
    },

    update(req, res){
        return TodoItem.find({
            where:{
                id: req.params.todoItemId,
                todoId: req.params.todoId
            }
        }).then(todoItem => {
            if (!todoItem){
                return res.status(404).send({
                    message:"Item not found"
                })
            }
            return todoItem.update({
                content: req.body.content || todoItem.content,
                complete: req.body.complete || todoItem.complete
            }).then(updatedTodoItem => res.status(202).send(updatedTodoItem))
            .catch(error => res.status(400).send(error))
        })
    },

    destroy(req, res){
        return TodoItem.find({
            where:{
                id: req.params.todoItemId,
                todoId: req.params.todoId
            }
        }).then(todoItem => {
            if (!todoItem){
                return res.status(404).send({
                    message:"Item not found"
                })
            }
            return todoItem.destroy()
            .then(()=>res.status(200).send({
                message:"Item deleted"
            }))
            .catch(error => res.status(400).send(error))
        })
    }
}
