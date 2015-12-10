'use strict';

angular.module('noterious')
  .controller('BoardsCtrl', function (currentUser, BoardsModel) {
    var ctrl = this;

    ctrl.loading = false;

    ctrl.newBoard = {
      title: '',
      description: '',
      isPublic: false
    };

    ctrl.getBoards = function(){
      BoardsModel.all()
        .then(function(boards) {
          ctrl.boards = boards;
        })
        .catch(function(error) {
        })
        .finally(function() {

        })
    }

    ctrl.resetForm = function () {
      ctrl.loading = false;
      ctrl.newBoard = {
        title: '',
        description: '',
        isPublic: false
      };
    };

    ctrl.createBoard = function (board, isValid) {
      if (isValid) {
        ctrl.loading = true;
        BoardsModel.create(board)
          .then(function() {
            ctrl.getBoards();
          })
          .catch(function(error) {
            console.log(error);
          })
          .finally(function() {
            ctrl.resetForm();
          }) 
      }
    };

    ctrl.updateBoard = function (boardId, board, isValid) {
      if (isValid) {
        ctrl.loading = true;
        // UPDATE BOARD
        BoardsModel.update(boardId, board)
          .then(function() {
            ctrl.getBoards();
          })
          .catch(function(error) {
            console.log(error);
          })
          .finally(function(){
            ctrl.cancelEditing();
          })
      }
    };

    ctrl.deleteBoard = function (boardId) {
      ctrl.loading = true;
      // DELETE BOARD
      BoardsModel.destroy(boardId)
        .then(function() {
          ctrl.getBoards();
        })
        .catch(function(error) {
          console.log(error);
        })
        .finally(function() {
          ctrl.cancelEditing();
        })
    };

    ctrl.setEditedBoard = function (boardId, board) {
      ctrl.editedBoardId = boardId;
      ctrl.editedBoard = angular.copy(board);
      ctrl.isEditing = true;
    };

    ctrl.isCurrentBoard = function (boardId) {
      return ctrl.editedBoard !== null && ctrl.editedBoardId === boardId;
    };

    ctrl.cancelEditing = function () {
      ctrl.loading = false;
      ctrl.editedBoardId = null;
      ctrl.editedBoard = null;
      ctrl.isEditing = false;
    };

    ctrl.getBoards();
  });
