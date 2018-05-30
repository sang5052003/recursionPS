//counting blob cells
let n = 8;
let grid = [
    [1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 1, 1],
    [0, 1, 1, 1, 0, 1, 1, 1]
];
let BACKGOURND = 0;     //배경
let IMAGE = 1;          //이미지 도트
let ALREADY_COUNTED = 2;

function countCells(x, y) {
    //범위
    if(x < 0 || y < 0 || x >= n || y >= n) return 0;
    else if (grid[x][y] !== IMAGE) return 0;
    else {
        grid[x][y] = ALREADY_COUNTED;
        return 1 + //자기 자신 cell
            countCells(x - 1, y + 1) + //나머지 팔방 탐색
            countCells(x, y + 1) +
            countCells(x + 1, y + 1) +
            countCells(x + 1, y) +
            countCells(x + 1, y - 1) +
            countCells(x, y - 1) +
            countCells(x - 1, y - 1) +
            countCells(x - 1, y);
    }

}

console.log(countCells(0, 7));