angular.module('lbxApp').
directive('clickOutside', ['$window', '$parse', function($window, $parse) {
  return {
    link: function(scope, el, attr) {
      if (!attr.clickOutside) {
        return;
      }

      var ignore;
      if (attr.ignoreIf) {
        ignore = $parse(attr.ignoreIf);
      }

      var nakedEl = el[0];
      var fn = $parse(attr.clickOutside);

      var handler = function(e) {
        if (nakedEl === e.target || nakedEl.contains(e.target) || (ignore && ignore(scope))) {
          return;
        }

        scope.$apply(fn);
      };

      $window.addEventListener('click', handler, true);

      scope.$on('$destroy', function(e) {
        $document.off('click', handler);
      });
    }
  };
}]);