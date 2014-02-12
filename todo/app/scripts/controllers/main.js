'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope, Todos) {
    $scope.$on('todos-updated', function() {
      $scope.todos = Todos.todos;
      $scope.$digest();
    });

    Todos.loadFromStorage();

    $scope.todos = Todos.todos;

    $scope.removeTodo = function(todo) {
      Todos.removeTodo(todo);
    }
  });
