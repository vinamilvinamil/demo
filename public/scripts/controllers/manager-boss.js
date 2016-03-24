'use strict';

/**
 * @ngdoc function
 * @name generatorYeomanApp.controller:ManagerBossCtrl
 * @description
 * # ManagerBoss
 * Controller of the generatorYeomanApp
 */
app.controller('manageBoss', ['$scope', '$uibModal', '$filter', function($scope, $uibModal, $filter) {
    $scope.bosss = [{
        checked: false,
        name: 'BKAV',
        industry: 'Software-SmartPhone',
        email: 'bkav@gmail.com',
        numberOfFollow: '8',
        about: 'Moi truong cong viec lanh manh, doi ngu nhan vien chuyen nghiep',
        specialties: '',
        website: 'htpps://www.bkav.com',
        typeCom: ''
    }, {
        checked: false,
        name: 'FPT software',
        industry: 'Software',
        email: 'fpt-software@gmail.com',
        numberOfFollow: '12',
        about: 'Moi truong cong viec lanh manh, doi ngu nhan vien chuyen nghiep',
        specialties: '',
        website: 'https://www.fpt-software.com',
        typeCom: ''
    }, {
        checked: false,
        name: 'Vinaphone',
        industry: 'Mobile-Internet',
        email: 'vinaphone@gmail.com',
        numberOfFollow: '9',
        about: 'Moi truong cong viec lanh manh, doi ngu nhan vien chuyen nghiep',
        specialties: '',
        website: 'https://www.vinaphone.com',
        typeCom: ''
    }];

    // paging
    $scope.numperpage = 5;
    $scope.currentPage = 1;
    $scope.pics = [];
    
    $scope.data = $scope.bosss;
    $scope.originData = $scope.bosss;
    $scope.totalItems = $scope.data.length;

     $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.pageChanged = function() {
         var begin = ($scope.currentPage - 1) * $scope.numperpage;
         var end = begin + $scope.numperpage;
        $scope.pics = $scope.data.slice(begin, end);
    };
    $scope.$watch('currentPage', function() {
        var begin = ($scope.currentPage - 1) * $scope.numperpage;
         var end = begin + $scope.numperpage;
        $scope.pics = $scope.data.slice(begin, end);
    });

    //search 
    $scope.availableSearchParams = [
          { key: "name", name: "name boss", placeholder: "name..." }
    ];
    $scope.$on('advanced-searchbox:modelUpdated', function (event, searchParameter) {
        $scope.data = $filter('filter')($scope.originData, searchParameter);
        $scope.totalItems = $scope.data.length;
        $scope.pageChanged();

    });

    //sort and filter table
    $scope.sortType     = ''; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.$watch('sortType + sortReverse', function(){
        $scope.data = $filter('orderBy')($scope.data,$scope.sortType, $scope.sortReverse);
        $scope.pageChanged();
    });


    $scope.updateBosss = function() {
        $scope.bosss.forEach(function(boss) {
            boss.checked = $scope.allBosss;
        });
    };
    //modal 
    $scope.open = function(index) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'BossModalInstanceCtrl',
            size: 'lg',
            resolve: {
                items: function() {
                    return $scope.bosss[index];
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
           
        });
    };
}]);
app.controller('BossModalInstanceCtrl', function($scope, $uibModalInstance, items) {
   

    $scope.boss = items;

    $scope.ok = function() {
        $uibModalInstance.close($scope.selected.item);
    };
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});