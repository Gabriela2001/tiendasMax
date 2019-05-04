angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('categoriasCtrl', function($scope) {
  $scope.categorias=[
    {
      nombre:"TV y Vídeo",
      icono:"ion-monitor"
    },
    {
      nombre:"Celulares",
      icono:"ion-iphone"
    },
    {
      nombre:"Línea Blanca",
      icono:"ion-waterdrop"
    },
    {
      nombre:"Videojuegos",
      icono:"ion-steam"
    },
    {
      nombre:"Electrodomésticos",
      icono:"fas fa-blender"
    },
    {
      nombre: "Computación y Tablets",
      icono:"ion-laptop"
    },
    {
      nombre: "Audio",
      icono:"ion-ipod"
    },
    {
      nombre:"Audio para Vehículos",
      icono:"ion-radio-waves"
    },
    {
      nombre: "Cámaras y Drones",
      icono:"ion-camera"
    },
    {
      nombre:"Audifonos y Bocinas",
      icono:"ion-headphone"
    },
    {
      nombre:"Prendas Electrónicas",
      icono:"ion-clock"
    },
    {
      nombre:"Cuidado Personal",
      icono:"fas fa-hand-holding-heart"
    }
  ]

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
