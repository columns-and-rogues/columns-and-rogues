export function doorLocation(boardSize) {
    const boardArrayLimit = boardSize - 1;
    let magicNum = Math.floor(boardSize / 2);
    let doorLocation = {
        x: boardArrayLimit,
        y: boardArrayLimit,
    };

    if (boardSize > 3) {
        doorLocation = {
            x: Math.floor(Math.random() * magicNum) + magicNum,
            y: Math.floor(Math.random() * magicNum) + magicNum
        };
    }
    return doorLocation;
}