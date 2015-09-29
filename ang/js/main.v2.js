var pete = angular.module('pete', []);
pete.controller('gol', function($scope, $interval) {

    var grid_size = 10;    
    var board = [];
    var speed = 2500;
    var game_config = {};
    
    $scope.grid_size = grid_size;
    $scope.init_running_speed = speed;
    $scope.grid_size_change_class = 0;
    $scope.speed_change_class = 0;
    $scope.start_game_btn = '';
    $scope.grid_size_update_text = '';
    
    $scope.start_game = function() {
        populate_grid();
        $scope.start_game_btn = ' Over';
        reset_grid_size_display();
    };
    $scope.update_grid_size = function() {
        board = [];
        $scope.outCell = $scope.grid_size;
        grid_size = $scope.grid_size;
        $scope.start_game_btn = ' Over';
        reset_grid_size_display();
        populate_grid();
    };
    $scope.update_run_speed = function() { 
        $scope.speed_change_update_text = '';
        $scope.speed_change_class = 0; 
        $scope.start_game_btn = ' Over'; 
        speed = $scope.running_speed;
        populate_grid();     
    };
    $scope.grid_size_change = function(){
        $scope.grid_size_update_text = 'UPDATE ';
        $scope.grid_size_change_class = 1;
    };
    $scope.speed_change = function() {
        $scope.speed_change_update_text = 'UPDATE ';
        $scope.speed_change_class = 1;
    };
    $scope.stop_game = function() {
        //TOOD:
        game_config.func = 'stop_game';
        $scope.board = gol_app(game_config);
    };
    $scope.restart_game = function() {
        //TODO:
        game_config.func = 'run_game';
        game_config.speed = speed;

        $scope.board = gol_app(game_config);
    };
    var reset_grid_size_display = function() {
        $scope.grid_size_update_text = '';
        $scope.grid_size_change_class = 0;
    };

    //--start 
    var populate_grid = function() {
        //create_gird();
        //update();
        //clear interval
        //set interval

        //--gather data to send to app
        game_config.func = 'start_game';
        game_config.board = board;
        game_config.grid_size = grid_size;
        game_config.speed = speed;

        //console.log('ANG:');
        //console.log(game_config);

        $scope.board = gol_app(game_config);
        
        var pg = gol_app(game_config);
        console.log(pg);
        
        run_game();    
        
    };

    var run_game = function() {
        game_config.func = 'run_game';
        game_config.board = board;
        game_config.grid_size = grid_size;
        game_config.speed = speed;

        $scope.board = gol_app(game_config);
        
        var rg = gol_app(game_config);
        console.log(rg);
    };

});





