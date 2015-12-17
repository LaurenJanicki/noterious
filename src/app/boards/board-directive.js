angular.module('noterious')
  .directive('board', function() {

    return {
      // restrict: 'E',
      scope: true,
      templateUrl: 'app/boards/board-directive.tmpl.html',
      link: function(scope, element, attrs) {
        $(element).hover(function() {
          $(this).css('color', 'blue');
        }, function() {
          $(this).css('color', 'orange');
        });
      }
    }
  })