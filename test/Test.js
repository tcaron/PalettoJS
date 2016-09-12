
'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var engineTest = new Engine();

PalettoTestCase.prototype.testStory1 = function () {

    assertTrue(engineTest.nbBilles == 0);

};

PalettoTestCase.prototype.testStory2 = function (){

    assertTrue(engineTest.colorWhoStart == 'blanc');
}

PalettoTestCase.prototype.testStory3 = function(){

    assertTrue(engineTest.mvBille('a1') );

}

PalettoTestCase.prototype.testStory4 = function(){

    engineTest.generatePlateau();


}