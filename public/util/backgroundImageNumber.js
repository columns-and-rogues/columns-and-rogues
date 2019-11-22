//To implament
// 1. on GameApp, call this function near the top feeding it character.boardsSurvived
// 2. pass that number down as props to Board
// 3. in Board.js assign that prop to a const backgroundNum
// 4. give the board element a class of background-${backgroundNum}
// 5. in css file create differnt class selectors for 0-9. the only item in each should be background-image:

export function backgroundImageNumber(boardsSurvived) {
    let bckdNum = boardsSurvived;
    while (bckdNum > 9) {
        bckdNum = bckdNum - 10;
    }
    return bckdNum;
}