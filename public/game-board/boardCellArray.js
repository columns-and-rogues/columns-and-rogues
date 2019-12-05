export function createBoard(numberOfRowsAndCols) {
    let yy = 0;
    let xx = 0;
    let boardArray = new Array(numberOfRowsAndCols * numberOfRowsAndCols)
        .fill({
            x: 0,
            y: 0,
            contents: null
        });

    let returnedArray = boardArray.map((object) => {
        object = { // seems like no need to mutate/reassign the `object` from the callback if you're totall replacing it
            x: xx, // a bit obtuse, could use some comments
            y: yy,
            contents: null
        };
        xx++;
        if (xx === numberOfRowsAndCols) {
            yy++; // hmmmmmm . . . if I were a dev expected to maintain this code, I'd be pretty confused here
            xx = 0;
        }
        return object;
    });
    returnedArray[0].contents = 'safe';
    return returnedArray;
}