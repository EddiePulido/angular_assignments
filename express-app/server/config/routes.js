const task = require("./../controllers/tasks.js");

module.exports = function(app){
    app.get('/tasks', function (req, res) {
        task.getTasks(request,response);        
    })

    // 2. Retrieve a Task by ID
    app.get('/tasks/:id', function (req, res) {
        task.getTask(request,response);
    })
    
    // 3. Create a Task
    app.post('/tasks', function (req, res) {
        task.createTask(request,response);
    })
    
    // 4. Update a Task by ID
    app.put('/tasks/:id', function (req, res) {
        task.updateTask(request,response);
    })
    
    // 5. Delete a Task by ID
    app.delete('/tasks/:id', function (req, res) {
        task.deleteTask(request,response);   
    })
}