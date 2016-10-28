angular.module("apiApp").service("mainSvc",function($http){

  var baseUrl = 'http://swapi.co/api';

  this.getShipInfo = function(){
    return $http({
      method: 'GET',
      url: baseUrl + '/starships/'
    }).then(function(response){
      if(response.status === 200){
        // console.log(response);
        return response.data.results;
      }
      return "The Death Star blew up our request";
    })
  };
})
