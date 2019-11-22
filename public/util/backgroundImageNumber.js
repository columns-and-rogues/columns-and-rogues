export function backgroundImageNumber(boardsSurvived) {
    let bckdNum = boardsSurvived;
    while (bckdNum > 9) {
        bckdNum = bckdNum - 10;
    }
    return bckdNum;
}