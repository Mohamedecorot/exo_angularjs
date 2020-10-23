app.controller("CommentsCtrl", function ($scope, $rootScope, PostFactory, $routeParams) {

    $rootScope.loading = true;
    $scope.newComment = {};

    PostFactory.get($routeParams.id).then(function (post) {
        $rootScope.loading = false;
        $scope.title = post.name;
        $scope.comments = post.comments;
    }, function (msg) {
        alert(msg);
    })

    $scope.addComment = function(){
        $scope.comments.push($scope.newComment);
        PostFactory.add($scope.newComment).then(function(){

        }, function(){
            alert('Votre commentaire n\'a pas pu être sauvegardé');
        })
        $scope.newComment = {};
    }
})

//    - AngularJs permet d’organiser les différentes fonctionnalités sous forme de modules. 
//      Ils permettent de garder notre système bien organisé.
//    - Pour créer un module : var app = angular.module(‘app’, []) ; 
//      Le tableau vide [] permet d’injecter différents modules (externes), 
//      on peut voir cela comme une injection de dépendance
//    - Ensuite si on veut créer un controller dans ce module, 
//      il faut récupérer le module app, et faire : app.controller(‘nomducontroller’, lafonctionàappeler)
//    - Enfin, il faut indiquer à ng-app d’appeler le module : ng-app="app"