'use strict';

/**
 * @ngdoc function
 * @name generatorYeomanApp.controller:ManagerJobCtrl
 * @description
 * # ManagerJobCtrl
 * Controller of the generatorYeomanApp
 */
app.controller('manageJob', function($scope, publicService, $uibModal, $filter) {

    //paging
    $scope.numperpage = 5;
    $scope.currentPage = 1;
    $scope.pics = [];
    publicService.loadDataHome()
        .then(function(data) {
            $scope.data = data;
            $scope.originData = data;
            $scope.totalItems = $scope.data.length;
             $scope.pageChanged();
            
        }, function(data) {
            console.log(data);
    });

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
          { key: "name", name: "Name Job", placeholder: "Name..." },
          { key: "view", name: "num views", placeholder: "views..." }
    ];
    $scope.$on('advanced-searchbox:modelUpdated', function (event, searchParameter) {
         $scope.data = $filter('filter')($scope.originData, searchParameter);
        $scope.totalItems = $scope.data.length;
        $scope.pageChanged();
    });
    //sort  
    $scope.sortType     = 'status'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order

    $scope.$watch('sortType + sortReverse', function(){
        $scope.data = $filter('orderBy')($scope.data,$scope.sortType, $scope.sortReverse);
        $scope.pageChanged();
    });



    //modal
    $scope.open = function(index) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'detailJob.html',
            controller: 'JobModalInstanceCtrl',
            size: 'lg',
            resolve: {
                items: function() {
                    return $scope.data[index];
                }
            }
        });
        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
           
        });
    };

});

app.controller('JobModalInstanceCtrl', function($scope, $uibModalInstance, items,VisDataSet) {

    //vis
     $scope.options = {
      autoResize: true,
      height: '800',
      width: '100%'
    };
    
    $scope.data = {
        "nodes":[
            {"id":"000ECU","label":"000ECU","size":10,"color":"#93D276","shape":"circle","shadow":true}
            ,{"id":"caw182793_000ECU_not_installed_0","label":"caw182793","size":5,"color":"#7F8489","shape":"square","shadow":true}
            ,{"id":"pressman.example.com_000ECU_not_installed_1","label":"pressman.example.com","size":5,"color":"#7F8489","shape":"square","shadow":true}
            ,{"id":"000EGG","label":"000EGG","size":20,"color":"#93D276","shape":"circle","shadow":true,"borderWidth":5,"level":1,"shadow.size":20}
            ,{"id":"abhi-cloud-win2012-64_000EGG_in_active_0","label":"abhi-cloud-win2012-64","size":5,"color":"#FF2A00","shape":"square","shadow":true}
            ,{"id":"abhi-rh-64-cloud_000EGG_in_active_1","label":"abhi-rh-64-cloud","size":5,"color":"#FF2A00","shape":"square","shadow":true}
            ,{"id":"anand-win28r2_000EGG_in_active_2","label":"anand-win28r2","size":5,"color":"#FF2A00","shape":"square","shadow":true}
            ,{"id":"ajay-pc_000EGG_in_active_3","label":"ajay-pc","size":5,"color":"#FF2A00","shape":"square","shadow":true},
            {"id":"brk_000EGG_in_active_4","label":"brk","size":5,"color":"#FF2A00","shape":"square","shadow":true},
            {"id":"brk-win64_000EGG_in_active_5","label":"brk-win64","size":5,"color":"#FF2A00","shape":"square","shadow":true},
            {"id":"banu-wnd_000EGG_in_active_6","label":"banu-wnd","size":5,"color":"#FF2A00","shape":"square","shadow":true},
            {"id":"zest_000EGG_in_active_146","label":"zest","size":5,"color":"#FF2A00","shape":"square","shadow":true},
            {"id":"000EPU","label":"000EPU","size":10,"color":"#93D276","shape":"circle","shadow":true},{"id":"ust2191_000EPU_not_installed_0","label":"ust2191","size":5,"color":"#7F8489","shape":"square","shadow":true},
            {"id":"ust2957_000EPU_not_installed_1","label":"ust2957","size":5,"color":"#7F8489","shape":"square","shadow":true},{"id":"000ELU","label":"000ELU","size":10,"color":"#93D276","shape":"circle","shadow":true},
            {"id":"ust0490_000ELU_in_active_0","label":"ust0490","size":5,"color":"#FF2A00","shape":"square","shadow":true},{"id":"ust4089_000ELU_in_active_1","label":"ust4089","size":5,"color":"#FF2A00","shape":"square","shadow":true},{"id":"ust4205_000ELU_in_active_2","label":"ust4205","size":5,"color":"#FF2A00","shape":"square","shadow":true},{"id":"ust4492_000ELU_in_active_3","label":"ust4492","size":5,"color":"#FF2A00","shape":"square","shadow":true},{"id":"ust5202_000ELU_in_active_4","label":"ust5202","size":5,"color":"#FF2A00","shape":"square","shadow":true},{"id":"zan-win2008-64-sp2-dc-1_000ELU_in_active_5","label":"zan-win2008-64-sp2-dc-1","size":5,"color":"#FF2A00","shape":"square","shadow":true}],
            
        "edges":[{"from":"000EGG","to":"000ECU"},{"from":"000ECU","to":"caw182793_000ECU_not_installed_0"},{"from":"000ECU","to":"pressman.example.com_000ECU_not_installed_1"},{"from":"000EGG","to":"abhi-cloud-win2012-64_000EGG_in_active_0"},{"from":"000EGG","to":"abhi-rh-64-cloud_000EGG_in_active_1"},{"from":"000EGG","to":"anand-win28r2_000EGG_in_active_2"},{"from":"000EGG","to":"ajay-pc_000EGG_in_active_3"},{"from":"000EGG","to":"brk_000EGG_in_active_4"},{"from":"000EGG","to":"brk-win64_000EGG_in_active_5"},{"from":"000EGG","to":"banu-wnd_000EGG_in_active_6"},{"from":"000EGG","to":"cas161850_000EGG_in_active_7"},{"from":"000EGG","to":"caw177084_000EGG_in_active_8"},{"from":"000EGG","to":"caw177749_000EGG_in_active_9"},{"from":"000EGG","to":"caw177936_000EGG_in_active_10"},{"from":"000EGG","to":"caw178075_000EGG_in_active_11"},{"from":"000EGG","to":"caw178237_000EGG_in_active_12"},{"from":"000EGG","to":"caw179183_000EGG_in_active_13"},{"from":"000EGG","to":"caw179333_000EGG_in_active_14"},{"from":"000EGG","to":"caw179452_000EGG_in_active_15"},{"from":"000EGG","to":"caw181412_000EGG_in_active_16"},{"from":"000EGG","to":"caw184412_000EGG_in_active_17"},{"from":"000EGG","to":"caw184911_000EGG_in_active_18"},{"from":"000EGG","to":"caw185133_000EGG_in_active_19"},{"from":"000EGG","to":"cc_000EGG_in_active_20"},{"from":"000EGG","to":"config5645vm0_000EGG_in_active_21"},{"from":"000EGG","to":"config6034vm0_000EGG_in_active_22"},{"from":"000EGG","to":"config6056vm0_000EGG_in_active_23"},{"from":"000EGG","to":"config6320vm0_000EGG_in_active_24"},{"from":"000EGG","to":"config6367vm0_000EGG_in_active_25"},{"from":"000EGG","to":"d806037_000EGG_in_active_26"},{"from":"000EGG","to":"gbw176857_000EGG_in_active_27"},{"from":"000EGG","to":"hari-linux32_000EGG_in_active_28"},{"from":"000EGG","to":"hari_000EGG_in_active_29"},{"from":"000EGG","to":"ia04-gzfwyw1_000EGG_in_active_30"},{"from":"000EGG","to":"ia04-rbwin7vm_000EGG_in_active_31"},{"from":"000EGG","to":"ics-64bit_000EGG_in_active_32"},{"from":"000EGG","to":"ics-mang_000EGG_in_active_33"},{"from":"000EGG","to":"ics-mkto_000EGG_in_active_34"},{"from":"000EGG","to":"ics-sensis_000EGG_in_active_35"},{"from":"000EGG","to":"in161659_000EGG_in_active_36"},{"from":"000EGG","to":"in172040_000EGG_in_active_37"},{"from":"000EGG","to":"ust0158_000EGG_in_active_38"},{"from":"000EGG","to":"ust0193_000EGG_in_active_39"},{"from":"000EGG","to":"ust0292_000EGG_in_active_40"},{"from":"000EGG","to":"ust0548_000EGG_in_active_41"},{"from":"000EGG","to":"ust0605_000EGG_in_active_42"},{"from":"000EGG","to":"ust0668_000EGG_in_active_43"},{"from":"000EGG","to":"ust1468_000EGG_in_active_44"},{"from":"000EGG","to":"ust1604_000EGG_in_active_45"},{"from":"000EGG","to":"ust1879_000EGG_in_active_46"},{"from":"000EGG","to":"ust1929_000EGG_in_active_47"},{"from":"000EGG","to":"ust1984_000EGG_in_active_48"},{"from":"000EGG","to":"ust2191_000EGG_in_active_49"},{"from":"000EGG","to":"ust2336_000EGG_in_active_50"},{"from":"000EGG","to":"ust2340_000EGG_in_active_51"},{"from":"000EGG","to":"ust2372_000EGG_in_active_52"},{"from":"000EGG","to":"ust2465_000EGG_in_active_53"},{"from":"000EGG","to":"ust2870_000EGG_in_active_54"},{"from":"000EGG","to":"ust2949_000EGG_in_active_55"},{"from":"000EGG","to":"ust2955_000EGG_in_active_56"},{"from":"000EGG","to":"ust2966_000EGG_in_active_57"},{"from":"000EGG","to":"ust2969_000EGG_in_active_58"},{"from":"000EGG","to":"ust3562_000EGG_in_active_59"},{"from":"000EGG","to":"ust3924_000EGG_in_active_60"},{"from":"000EGG","to":"ust3929_000EGG_in_active_61"},{"from":"000EGG","to":"ust4183_000EGG_in_active_62"},{"from":"000EGG","to":"ust4306_000EGG_in_active_63"},{"from":"000EGG","to":"ust4361_000EGG_in_active_64"},{"from":"000EGG","to":"ust4513_000EGG_in_active_65"},{"from":"000EGG","to":"ust4663_000EGG_in_active_66"},{"from":"000EGG","to":"ust4691_000EGG_in_active_67"},{"from":"000EGG","to":"ust4985_000EGG_in_active_68"},{"from":"000EGG","to":"ust4992_000EGG_in_active_69"},{"from":"000EGG","to":"ust5001_000EGG_in_active_70"},{"from":"000EGG","to":"ust6005_000EGG_in_active_71"},{"from":"000EGG","to":"ust6023_000EGG_in_active_72"},{"from":"000EGG","to":"ust6043_000EGG_in_active_73"},{"from":"000EGG","to":"ust6531_000EGG_in_active_74"},{"from":"000EGG","to":"ust6532_000EGG_in_active_75"},{"from":"000EGG","to":"ust6581_000EGG_in_active_76"},{"from":"000EGG","to":"ust6828_000EGG_in_active_77"},{"from":"000EGG","to":"inx174071_000EGG_in_active_78"},{"from":"000EGG","to":"inx174442_000EGG_in_active_79"},{"from":"000EGG","to":"inx178680_000EGG_in_active_80"},{"from":"000EGG","to":"inx178784_000EGG_in_active_81"},{"from":"000EGG","to":"inx178792_000EGG_in_active_82"},{"from":"000EGG","to":"jasondesktop_000EGG_in_active_83"},{"from":"000EGG","to":"linux_64_000EGG_in_active_84"},{"from":"000EGG","to":"mang-ics_000EGG_in_active_85"},{"from":"000EGG","to":"mangirish-ics_000EGG_in_active_86"},{"from":"000EGG","to":"mangirishiscphg_000EGG_in_active_87"},{"from":"000EGG","to":"nj12app1018_000EGG_in_active_88"},{"from":"000EGG","to":"nylim-saradev_000EGG_in_active_89"},{"from":"000EGG","to":"org - 0001mt unknown host_000EGG_in_active_90"},{"from":"000EGG","to":"pl1usmgt0434nb_000EGG_in_active_91"},{"from":"000EGG","to":"pmpc-anand_000EGG_in_active_92"},{"from":"000EGG","to":"psvg28svprod_000EGG_in_active_93"},{"from":"000EGG","to":"psvgwin28maui_000EGG_in_active_94"},{"from":"000EGG","to":"psvmabhipn_000EGG_in_active_95"},{"from":"000EGG","to":"rnjkwak605_000EGG_in_active_96"},{"from":"000EGG","to":"rrisqldb2_000EGG_in_active_97"},{"from":"000EGG","to":"sap_000EGG_in_active_98"},{"from":"000EGG","to":"sd-linux_000EGG_in_active_99"},{"from":"000EGG","to":"sd-linux32agent_000EGG_in_active_100"},{"from":"000EGG","to":"sql2k8r2_000EGG_in_active_101"},{"from":"000EGG","to":"shweta_000EGG_in_active_102"},{"from":"000EGG","to":"shweta-ics_000EGG_in_active_103"},{"from":"000EGG","to":"sudeep-win-x86-64_000EGG_in_active_104"},{"from":"000EGG","to":"suse_64_bit.example.com_000EGG_in_active_105"},{"from":"000EGG","to":"us-r9m6cmn_000EGG_in_active_106"},{"from":"000EGG","to":"usr8n68kd_000EGG_in_active_107"},{"from":"000EGG","to":"vdsabhi_000EGG_in_active_108"},{"from":"000EGG","to":"w8v64od10_000EGG_in_active_109"},{"from":"000EGG","to":"win-3bdl7cshvhb_000EGG_in_active_110"},{"from":"000EGG","to":"win-6ib2ii78pf1_000EGG_in_active_111"},{"from":"000EGG","to":"win-kb53cqt94dc_000EGG_in_active_112"},{"from":"000EGG","to":"beetle_000EGG_in_active_113"},{"from":"000EGG","to":"elantra_000EGG_in_active_114"},{"from":"000EGG","to":"estilo_000EGG_in_active_115"},{"from":"000EGG","to":"hari64bit_000EGG_in_active_116"},{"from":"000EGG","to":"hickory.example.com_000EGG_in_active_117"},{"from":"000EGG","to":"idea-pc_000EGG_in_active_118"},{"from":"000EGG","to":"in158066_000EGG_in_active_119"},{"from":"000EGG","to":"in158111_000EGG_in_active_120"},{"from":"000EGG","to":"in172041_000EGG_in_active_121"},{"from":"000EGG","to":"india-pc_000EGG_in_active_122"},{"from":"000EGG","to":"example-lap_000EGG_in_active_123"},{"from":"000EGG","to":"example-vendor.ubm-us.net_000EGG_in_active_124"},{"from":"000EGG","to":"invgtestjr1_000EGG_in_active_125"},{"from":"000EGG","to":"ip-10-254-24-158_000EGG_in_active_126"},{"from":"000EGG","to":"kapil-pc_000EGG_in_active_127"},{"from":"000EGG","to":"kizashi_000EGG_in_active_128"},{"from":"000EGG","to":"kraman-win7_000EGG_in_active_129"},{"from":"000EGG","to":"krishna-virtualbox_000EGG_in_active_130"},{"from":"000EGG","to":"manish-pc_000EGG_in_active_131"},{"from":"000EGG","to":"mkhan-win7-32_000EGG_in_active_132"},{"from":"000EGG","to":"mkhan-dt_000EGG_in_active_133"},{"from":"000EGG","to":"mreddy_000EGG_in_active_134"},{"from":"000EGG","to":"psvgwn95ga1_000EGG_in_active_135"},{"from":"000EGG","to":"rhel_000EGG_in_active_136"},{"from":"000EGG","to":"sameer-2kr2-cloud_000EGG_in_active_137"},{"from":"000EGG","to":"sandeep-nanjappa_000EGG_in_active_138"},{"from":"000EGG","to":"sudeep-ics-rh64_000EGG_in_active_139"},{"from":"000EGG","to":"sudeep-win28_000EGG_in_active_140"},{"from":"000EGG","to":"sudeepubuntu64_000EGG_in_active_141"},{"from":"000EGG","to":"ubuntu_000EGG_in_active_142"},{"from":"000EGG","to":"user-pc_000EGG_in_active_143"},{"from":"000EGG","to":"win2864sp2newtemplate_000EGG_in_active_144"},{"from":"000EGG","to":"wk800020_000EGG_in_active_145"},{"from":"000EGG","to":"zest_000EGG_in_active_146"},{"from":"000EGG","to":"000EPU"},{"from":"000EPU","to":"ust2191_000EPU_not_installed_0"},{"from":"000EPU","to":"ust2957_000EPU_not_installed_1"},{"from":"000EGG","to":"000ELU"},{"from":"000ELU","to":"ust0490_000ELU_in_active_0"},{"from":"000ELU","to":"ust4089_000ELU_in_active_1"},{"from":"000ELU","to":"ust4205_000ELU_in_active_2"},{"from":"000ELU","to":"ust4492_000ELU_in_active_3"},{"from":"000ELU","to":"ust5202_000ELU_in_active_4"},
            {"from":"000ELU","to":"zan-win2008-64-sp2-dc-1_000ELU_in_active_5"}]};

    //data
    $scope.items = items;
    $scope.ok = function() {
        $uibModalInstance.close($scope.selected.item);
    };
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.closeModal = function(){
      $uibModalInstance.dismiss('cancel');  
    }
});


