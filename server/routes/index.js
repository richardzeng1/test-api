const todoControllers = require("../controllers").todos;
const todoItemControllers = require("../controllers").todoItems;

module.exports = (app) => {
    app.get("/api", (req, res)=>res.status(200).send({
        message:"Welcome to the API"
    }))

    app.post("/api/todos/:todoId/items", todoItemControllers.create);
    app.put("/api/todos/:todoId/items/:todoItemId", todoItemControllers.update)
    app.delete("/api/todos/:todoId/items/:todoItemId", todoItemControllers.destroy)

    app.get("/api/todos/:todoId", todoControllers.retrieve);
    app.put("/api/todos/:todoId", todoControllers.update);
    app.delete("/api/todos/:todoId", todoControllers.destroy)
    app.post("/api/todos", todoControllers.create);
    app.get("/api/todos", todoControllers.list);

    app.all("/api/todos/:todoId/items", (req, res)=>{
        res.status(405).send({
            message:"Operation not allowed"
        })
    })

}
