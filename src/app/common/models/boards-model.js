'use strict';

angular.module('noterious.common')
  .service('BoardsModel', function ($http, UserModel, ENDPOINT_URI, $q) {
    var service = this;

    // var boards = {
    //   1: {
    //     description: "Anything and everything!",
    //     isPublic: true,
    //     title: "Random Ideas"
    //   },
    //   2: {
    //     description: "BizDev Ideas",
    //     isPublic: false,
    //     title: "Hustle"
    //   },
    //   3: {
    //     description: "this is a test",
    //     isPublic: false,
    //     title: "testing"
    //   }
    // };

    // service.getBoards() {
    //   var deferred = $q.defer();
    //   deferred.resolve(boards);
    //   return deferred.promise;
    // }

    function extract(response) {
      return response.data;
    }

    function getUrl() {
      return ENDPOINT_URI + 'users/' + UserModel.getCurrentUser() + '/boards.json';
    }

    function getUrlById(boardId) {
      return ENDPOINT_URI + 'users/' + UserModel.getCurrentUser() + '/boards/' + boardId + '.json';
    }

    service.all = function() {
      return $http.get(getUrl()).then(extract);
    }

    service.fetch = function(boardId) {
      return $http.get(getUrlById(boardId)).then(extract);
    }

    service.create = function(board) {
      return $http.post(getUrl(), board).then(extract);
    }

    service.update = function(boardId, board) {
      return $http.put(getUrlById(boardId), board).then(extract);
    }

    service.destroy = function(boardId) {
      return $http.delete(getUrlById(boardId)).then(extract);
    }

  });