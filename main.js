angular.module('app', []);

angular
	.module('app')
		.controller('main', ['$scope', function($scope){

			$scope.markerCoords = []
		
			$scope.coordinates = function(event) {
			    var coordPair = {
			    	'x' : "",
			    	'y' : "",
			    	'note': "",
			    	'visible': false,
			    }
			    coordPair['x'] = event.clientX;
			    coordPair['y'] = event.clientY;

			    $scope.markerCoords.push(coordPair);

			    $scope.shownote = function($index) {
			    	console.log($index)
			    	$scope.markerCoords[$index].visible = true
  					// $scope.noteIsVisible = true; 
					};

			    console.log(coordPair);
			    console.log($scope.markerCoords)
			}
				$scope.remove = function($index){
					$scope.markerCoords.splice($index, 1);
				}

			
				$scope.hidenote = function ($index) {
					$scope.markerCoords[$index].visible = false

					};
		
		}])