var mainCtrl;

mainCtrl = function($scope, $http) {
  return $scope.doSearch = function() {
    var url;
    url = 'http://gdata.youtube.com/feeds/api/videos?' + ['q=' + encodeURIComponent($scope.query), 'alt=json', 'max-results=10', 'v=2', 'callback=JSON_CALLBACK'].join('&');
    return $http.jsonp(url).success(function(data) {
      return $scope.results = data.feed.entry;
    });
  };
};
