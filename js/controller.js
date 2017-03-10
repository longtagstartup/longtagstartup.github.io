"use strict";

angular.module("myApp").controller('porquenosCtrl', function($scope, $timeout) {
        var timer;
        $scope.counterCode = 0;
        $scope.counterYear = 0;
        $scope.counterWork = 0;
        var counterCodeUpdate = function() {
            $scope.counterCode+=1;
            timer = $timeout(counterCodeUpdate, 1000);
            if ($scope.counterCode === 60890.000) {
            	$timeout.cancel(timer);
            }
        };
        counterCodeUpdate();

        var counterYearUpdate = function() {
            $scope.counterYear+=2;
            timer = $timeout(counterYearUpdate, 1000);
            if ($scope.counterCode === 16) {
            	$timeout.cancel(timer);
            }
        };
        counterYearUpdate();

        var counterWorkUpdate = function() {
            $scope.counterWork+=3;
            timer = $timeout(counterWorkUpdate, 1000);
            if ($scope.counterCode === 16) {
            	$timeout.cancel(timer);
            }
        };
        counterWorkUpdate();
    });

//O que fazemos Controller
angular.module("myApp").controller("oquefazemosCtrl", function($scope){
	$scope.titulo = "O QUE FAZEMOS";
	$scope.conteudo = "On the flip side, Sass won’t solve all of your problems or cure your bad habits. I nefficient, bloated stylesheets can be just as nefficient and bloated when using Sass. Good organization and smart thinking still apply here. In fact, there are instances where Sass can magnify bad practices, and we’ll go into that a bit as well. But when used properly and intelligently, Sass canbe such a massive assist in creating websites.";

});

//Team Controller
angular.module('myApp').controller('teamCtrl', function($scope){
	$scope.titulo = "NOSSA EQUIPA";
	$scope.teamMenber = [
		{img:"images/helio.jpg", nome:"Hélio F. FIla", funcao:"Co-Fundador", fb:"",twt:"https://twitter.com/GeekMattos", git:"https://github.com/DumildeMatos"},
		{img:"images/adilson.JPG", nome:"Adilson M. Futa", funcao:"Co-Fundador", fb:"https://www.facebook.com/adilsonmariafuta",twt:"", git:"https://github.com/adilsonfuta"},
		{img:"images/hannibal.jpg", nome:"Hannibal Sesbastião", funcao:"Co-Fundador", fb:"",twt:"https://twitter.com/hannireth", git:"https://github.com/Anibal-Sebastiao"},
		{img:"images/dumilde.jpg", nome:"Dumilde J. Mattos", funcao:"Co-Fundador", fb:"",twt:"", git:""}
	];
});

angular.module('myApp').controller('produtoCtrl',  function($scope){
    $scope.produtos = [
        {nome:"Produt's name",desc:"produt's description",img:"produtosIMG/programming-1024x682.jpg"}
        ];
});

