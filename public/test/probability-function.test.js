import { probabilityFunction } from '../util/probability-function.js';

const test = QUnit.test;

test('should return 0 if there are no gold, items, or monsters remaining', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const testCharacter = {
        goldTilesRemaining: 0,
        itemTilesRemaining: 0,
        monsterTilesRemaining: 0,
        unknownTilesRemaining: 10,
    };

    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = probabilityFunction(testCharacter);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});