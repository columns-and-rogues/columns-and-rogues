const boardCellArray = [
    {
        x: 0,
        y: 0, 
        contents: 1
    },
    {
        x: 1,
        y: 0, 
        contents: null
    },
    {
        x: 2,
        y: 0, 
        contents: null
    },
    {
        x: 3,
        y: 0, 
        contents: 2
    },
    {
        x: 4,
        y: 0, 
        contents: null
    },
    {
        x: 0,
        y: 1, 
        contents: null
    },
    {
        x: 1,
        y: 1, 
        contents: null
    },
    {
        x: 2,
        y: 1, 
        contents: null
    },
    {
        x: 3,
        y: 1, 
        contents: 3
    },
    {
        x: 4,
        y: 1, 
        contents: 0
    },
    {
        x: 0,
        y: 2, 
        contents: null
    },
    {
        x: 1,
        y: 2, 
        contents: null
    },
    {
        x: 2,
        y: 2, 
        contents: null
    },
    {
        x: 3,
        y: 2, 
        contents: null
    },
    {
        x: 4,
        y: 2, 
        contents: null
    },
    {
        x: 0,
        y: 3, 
        contents: null
    },
    {
        x: 1,
        y: 3, 
        contents: null
    },
    {
        x: 2,
        y: 3, 
        contents: null
    },
    {
        x: 3,
        y: 3, 
        contents: null
    },
    {
        x: 4,
        y: 3, 
        contents: null
    },
    {
        x: 0,
        y: 4, 
        contents: null
    },
    {
        x: 1,
        y: 4, 
        contents: null
    },
    {
        x: 2,
        y: 4, 
        contents: null
    },
    {
        x: 3,
        y: 4, 
        contents: null
    },
    {
        x: 4,
        y: 4, 
        contents: null
    }
];

function createBoard(numberOfRowsAndCols) {
    let boardArray = new Array(numberOfRowsAndCols * numberOfRowsAndCols)
        .fill({
            x: 0,
            y: 0,
            content: null
        });

    let y = 0;
    let x = 0;

    boardArray.forEach((object) => {
        object.x = x;
        object.y = y;

        x++;
        
        if (x === numberOfRowsAndCols) {
            y++;
            x = 0;
        }
    });

    return boardArray;
}

export default boardCellArray;