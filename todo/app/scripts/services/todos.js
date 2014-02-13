'use strict';

angular.module('todoApp')
  .service('Todos', function Todos($rootScope) {
    function commitToLS(todos) {
      localStorage.setItem('todos', angular.toJson(todos));
      $rootScope.$broadcast('todos-updated');
    };

    return {
      todos: [
        { title: 'Buy milk' }
      ],

      addTodo: function(todo) {
        this.todos.push(todo);
        commitToLS(this.todos);
      },

      removeTodo: function(todo) {
        var title = todo.title;
        var idx = -1;
        for (var i = 0; i < this.todos.length; i++) {
          if (this.todos[i].title === title) {
            idx = i;
            break;
          }
        }

        if (idx > -1) {
          this.todos.splice(idx, 1);
          commitToLS(this.todos);
        }
      },

      loadFromStorage: function() {
        this.todos = angular.fromJson(localStorage.getItem('todos')) || [];
      }
    };
  });
