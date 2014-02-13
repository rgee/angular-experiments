'use strict';

angular.module('todoApp')
  .directive('addTodoButton', ['Todos', function (Todos) {
    return {
      restrict: 'A',
      scope: {
        todo: '='
      },
      link: function postLink(scope, element, attrs) {
        console.log(scope);
        element.bind('click', function() {
          Todos.addTodo(angular.copy(scope.todo));
          scope.todo = {};
        });
      }
    };
  }]);
