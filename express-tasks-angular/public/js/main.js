angular.module('TasksApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tasks/todo', {
        templateUrl: '/partials/tasks.html',
        controller: 'TodoTasksCtrl'
      })
      .when('/tasks/done', {
        templateUrl: '/partials/completed.html',
        controller: 'DoneTasksCtrl'
      })
      .otherwise('/tasks/todo')
  })
  .controller('TodoTasksCtrl', function ($scope, DataFactory) {
    // $scope.isSectionDone = false

    DataFactory.getTasks() // will assign tasks to rootScope

    $scope.doneTask = function (e, id, title) {
      e.preventDefault()
      let done = 'true'
      let createdAt = Date.now()
      DataFactory.doneTask(id, done, title, createdAt)
        .then(DataFactory.getTasks)
    }

    $scope.removeTask = function (e, id) {
      e.preventDefault()
      DataFactory.removeTask(id)
        .then(DataFactory.getTasks)
    }

    $scope.addTask = function (e) {
      e.preventDefault()
      const title = $scope.title
      DataFactory.addTask(title)
        .then(DataFactory.getTasks)
    }
  })
  .controller('DoneTasksCtrl', function ($scope, DataFactory) {
    // $scope.isSectionDone = true
    DataFactory.getTasks()
  })
  .factory('DataFactory', function ($http, $rootScope) {
    function getTasks () {
      return $http.get('/api/Todos')
                .then(({ data }) => data)
                .then(tasks => $rootScope.tasks = tasks)
    }

    function addTask (title) {
      return $http.post('/api/Todos', { title })
    }

    function removeTask (id) {
      return $http.delete(`/api/Todos/${id}`)
    }

    function doneTask (id, done, title, createdAt) {
      return $http.put(`/api/Todos/${id}`, { done, title, createdAt })
    }

    return { getTasks, addTask, removeTask, doneTask }
  })
