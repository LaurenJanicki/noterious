angular.module('noterious')
  .directive('board', function() {

    var link = function(scope, element, attrs) {
      $(element).hover(function() {
        $(this).css('color', 'blue');
      }, function() {
        $(this).css('color', 'orange');
      });
    }

    var controller = function() {
      var ctrl = this;

      ctrl.count = 0;

      ctrl.incrementCount = function() {
        ctrl.count ++;
      }
    }

    return {
      // restrict: 'E',
      scope: true,
      templateUrl: 'app/boards/board-directive.tmpl.html',
      link: link,
      controller: controller,
      controllerAs: 'myCtrl'
    }
  })