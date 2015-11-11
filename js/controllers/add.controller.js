let AddController = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/movie';

  let Movie = function (obj) {
    this.name = obj.name;
    this.bond = obj.bond;
    this.hasSeen = false;
  };

  $scope.addMovie = (obj) => {
    let w = new Movie(obj);

    $http.post(url, w, PARSE.CONFIG).then( (res) => {
      $scope.movie = {};
    });

  };

};

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController;