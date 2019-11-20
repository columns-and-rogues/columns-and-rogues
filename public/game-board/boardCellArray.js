export function createBoard(numberOfRowsAndCols) {
    let yy = 0;
    let xx = 0;
    let boardArray = new Array(numberOfRowsAndCols * numberOfRowsAndCols)
        .fill({
            x: 0,
            y: 0,
            contents: null
        });

    return boardArray.map((object) => {
        object = {
            x: xx,
            y: yy,
            contents: null
        };
        xx++;
        if (xx === numberOfRowsAndCols) {
            yy++;
            xx = 0;
        }
        return object;
    });
}