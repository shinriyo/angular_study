mainCtrl = ($scope, $http)->
  $scope.doSearch = ()->
    url = 'http://gdata.youtube.com/feeds/api/videos?' +
      [
        'q=' + encodeURIComponent($scope.query),
        'alt=json',
        'max-results=10',
        'v=2',
        'callback=JSON_CALLBACK'
      ].join('&')
    $http.jsonp(url).success((data)->
      #console.dir(data))
      $scope.results = data.feed.entry
    )
