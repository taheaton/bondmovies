let ListController = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/movie';

  $http.get(url, PARSE.CONFIG).then( (res) => {
    $scope.movies = res.data.results;
  });

};

ListController.$inject = ['$scope', '$http', 'PARSE'];

export default ListController;