var Todos = require('../models/todoModel');

module.exports = function(app){

  app.get('/api/setupTodos', function(req, res){
    //seed db
    var starterTools = [
      {
        username: 'xulambs',
        todo: 'Buy milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'xulambs',
        todo: 'Feed dog',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'xulambs',
        todo: 'Learn Node',
        isDone: false,
        hasAttachment: false
      }
    ];
    Todos.create(starterTools, function(err, results){
      res.send(results);
    });
  });
}
