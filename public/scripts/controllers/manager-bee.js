'use strict';
app.controller('manageBee', ['$scope', '$uibModal','$filter',  function($scope, $uibModal, $filter) {
    $scope.bees = [{
        checked: false,
        username: 'huu dat',
        fullname: 'tran huu dat',
        email: 'dat@gmail.com',
        gender: 'male',
        cardPardpost: '711AA12324567',
        dateOfBirth: '12/3/1899',
        address: 'SN254 - ngo 125 - Bach Mai - Hai Ba Trung - Ha Noi',
        maritalstatus: 'Forever alone',
        mobile: '01234356789',
        education: 'Dai hoc chinh quy',
        language: 'Tieng Viet, Tieng Anh, Tieng Trung',
        skill: 'Java, PHP, Python, AngularJs',
        experience: '2 nam kinh nghiem tai BKAV',
        volunteer: '1 nam hoat dong tinh nguyen',
        awardRecognitions: 'Chua co',
        createdTime: '2/5/2014'
    }, {
        checked: false,
        username: 'astrung',
        fullname: 'Nguyen Tuan Anh',
        email: 'trung@gmail.com',
        gender: 'male',
        cardPardpost: '711AA12324457',
        dateOfBirth: '12/3/1899',
        address: 'SN254 - ngo 125 - Bach Mai - Hai Ba Trung - Ha Noi',
        maritalstatus: 'Forever alone',
        mobile: '01234356789',
        education: 'Dai hoc chinh quy',
        language: 'Tieng Viet, Tieng Anh, Tieng Trung',
        skill: 'Java, PHP, Python, AngularJs',
        experience: '2 nam kinh nghiem tai BKAV',
        volunteer: '1 nam hoat dong tinh nguyen',
        awardRecognitions: 'Chua co',
        createdTime: '2016-02-27 03:26:39'
    }, {
        checked: false,
        username: 'cuongbk',
        fullname: 'Nguyễn Cường',
        email: 'cuong@gmail.com',
        gender: 'male',
        cardPardpost: '711AA18924567',
        dateOfBirth: '12/3/1899',
        address: 'SN254 - ngo 125 - Bach Mai - Hai Ba Trung - Ha Noi',
        maritalstatus: 'Forever alone',
        mobile: '01234356789',
        education: 'Dai hoc chinh quy',
        language: 'Tieng Viet, Tieng Anh, Tieng Trung',
        skill: 'Java, PHP, Python, AngularJs',
        experience: '2 nam kinh nghiem tai BKAV',
        volunteer: '1 nam hoat dong tinh nguyen',
        awardRecognitions: 'Chua co',
        createdTime: '2016-02-27 03:15:10'
    }];

    //paging
    $scope.numperpage = 5;
    $scope.currentPage = 1;
    $scope.pics = [];
    
    $scope.data = $scope.bees;
    $scope.originData = $scope.bees;
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
          { key: "username", name: "username", placeholder: "username..." },
          { key: "email", name: "email", placeholder: "email..." }
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

    $scope.updateBees = function() {
        $scope.bees.forEach(function(bee) {
            bee.checked = $scope.allBees;
        });
    };
    //modal 
    $scope.open = function(index) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'BeeModalInstanceCtrl',
            size: 'lg',
            resolve: {
                items: function() {
                    return $scope.bees[index];
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
           
        });
    };
}]);
app.controller('BeeModalInstanceCtrl', function($scope, $uibModalInstance, items) {
   

	$scope.bee = items;

    $scope.ok = function() {
        $uibModalInstance.close($scope.selected.item);
    };
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});