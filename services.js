angular.module('todo').factory('todoStorage', function(){
  var STORAGE_DATA = 'STORAGE_DATA'
  
  var storage = {
    todos : [],
    
    _saveToLocalStorage : function(data)
    {
      localStorage.setItem(STORAGE_DATA, JSON.stringify(data));
    },
    
    _getFromLocalStorage : function()
    {
      return JSON.parse(localStorage.getItem(STORAGE_DATA));
    },
    
    get : function(){
      angular.copy(storage._getFromLocalStorage(), storage.todos);
      
      return storage.todos;
    },
    
    remove : function(todo){
      var idx = storage.todos.findIndex(function (item){
        return item.id === todo.id;
      });
      
      if(idx > -1)
      {
        storage.todos.splice(idx,1);
      }
    },
    
    add : function(newTodoTitle){
      var newTodo = {
        title : newTodoTitle,
        completed : false,
        createdAt : Date.now()
      };
      
      storage.todos.push(newTodo);
      storage._saveToLocalStorage(storage.todos);
    },
    
    update : function()
    {
      storage._saveToLocalStorage(storage.todos);
    }
  }
  
  return storage;
});



// service
// factory
// provider