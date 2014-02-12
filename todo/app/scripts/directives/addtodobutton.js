'use strict';

angular.module('todoApp')
  .directive('addTodoButton', ['Todos', function (Todos) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.bind('click', function() {
          Todos.addTodo({ title: 'New todo' });
        });
      }
    };
  }]);
