function createSquareMap(mapDimension, containerID){

    var div = $('<div>', {class: 'cell'});
    div = div.width('30px');
    div = div.height( '30px' );

    for(var i = 0; i < mapDimension; i++){
        for(var j = 0; j < mapDimension; j++){
            if(j==0){
                var cell = $( "#" + containerID ).append( div.clone().css('clear', 'left') );
            }
            else{
                var cell = $( "#" + containerID ).append( div.clone() );
            }
        }
    }
}

function transform2Dto1D(row, column, dimension){
    if( (row > (dimension-1)) || (column > (dimension-1)) ){
        throw new Error("Array out of Index");
    }
    else{
        return (row*dimension + column);
    }
}

function enableObstacles(){
    alert("You can set the obstacles in the map by clicking on a node.\n" +
            "Grey nodes are free and black nodes are obstacles.\n" +
            "When you have finished, press again the button to proceed.\n");
}

function setRobotsPositions(){
    alert("You can set the positions of the 2 robots by clicking on a node.\n" +
            "If you click when having already defined the 2 robots, the oldest one will be reset.\n" +
            "When you have finished, press again the button to execute the DEMO.\n");
}

function executeAlgorithm(){
    alert("Algorithm executed !");
}


function getCell(cellClass, row, column, mapDimension){
    var index_1D = transform2Dto1D(row, column, mapDimension);
    return $( $('.' + cellClass).get( index_1D ) );
}

function setNodeExpanded(obj){
    obj.removeClass( "red" ).addClass("green");

}


function handleUnitTests(){
	if(unitTestsExecuted == false){
        executeUnitTests();
        unitTestsExecuted = true;
    }

    if(unitTestsVisible == false){
        $('#qunit').show({
            duration:2000,
            easing:"linear"
        });
        unitTestsVisible = true;
        $('#unit-test-button').html("Disable Unit Tests");
    }
    else{
        $('#qunit').hide({
            duration:2000,
            easing:"linear"
        });
        unitTestsVisible = false;
        $('#unit-test-button').html("Enable Unit Tests");
    }
    $('#unit-test-button').toggleClass("success").toggleClass("alert");
}

function executeUnitTests(){

    QUnit.test( "hello test", function( assert ) {
            assert.ok( 1 == "1", "Passed!" );
    });

    QUnit.test("2D to 1D transformations", function( assert) {
        var value = transform2Dto1D(1,4,8);
        assert.ok(value, 12, "Passed!");
        try{
            var value = transform2Dto1D(8,4,8);
        }
        catch(err){
            assert.ok(value, "Array out of Index", "Passed!");
        }
    });
}


