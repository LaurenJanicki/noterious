angular.module('noterious')
  .directive('board', function() {

    var link = function(scope, element, attrs, controller) {
      $(element).hover(function() {
        $(this).css('color', 'blue');
        scope.incrementCount();
      }, function() {
        $(this).css('color', 'orange');
      });
    }

    var controller = function($scope) {
      var ctrl = this;

      ctrl.count = 0;

      $scope.incrementCount = function() {
        ctrl.count ++;
        console.log(ctrl.count);
      }
    }

    return {
      // restrict: 'E',
      scope: true,
      templateUrl: 'app/boards/board-directive.tmpl.html',
      link: link,
      controller: controller
    }
  })