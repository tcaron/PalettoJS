
'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var engineTest = new Engine();

PalettoTestCase.prototype.testStory1 = function () {

    assertTrue(engineTest.getNbBilles() == 0);

};

PalettoTestCase.prototype.testStory2 = function (){


    assertTrue(engineTest.getPlayer() == "blanc");
};

PalettoTestCase.prototype.testStory3 = function(){



};

PalettoTestCase.prototype.testStory4 = function(){



};

PalettoTestCase.prototype.testStory5 = function(){


};
PalettoTestCase.prototype.testStory6 = function(){

    engineTest.playerPlay();
    assertTrue(engineTest.getPlayer() == "noir");
};