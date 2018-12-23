const todoControllers = require("../controllers").todos;
const todoItemControllers = require("../controllers").todoItems;

module.exports = (app) => {
    app.get("/api", (req, res)=>res.status(200).send({
        message:"Welcome to the API"
    }))

    app.post("/api/todos/:todoId/items", todoItemControllers.create);
    app.get("/api/todos/:todoId", todoControllers.retrieve);
    app.put("/api/todos/:todoId", todoControllers.update);
    app.post("/api/todos", todoControllers.create);
    app.get("/api/todos", todoControllers.list);

}
