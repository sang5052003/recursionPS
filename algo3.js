//미로찾기
let n = 8;
let maze = [
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 1, 1, 0, 1],
    [0, 1, 1, 1, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0, 1, 0, 0]
];
let PATHWAY = 0;    //white, 통로
let WALL = 1;       //blue, 벽
let BLOCKED = 2;    //red, false가 리턴되면 red로 바뀐다
let PATH = 3;       //green, 방문하면 green이 되었다가

function findPath(x, y) {
    if (x < 0 || y < 0 || x >= n || y >= n) { //범위를 벗어났다면
        return false;
    } else if (maze[x][y] !== PATHWAY) { //except visited(green, red), wall(blue)
        return false;
    } else if (x === n - 1 && y === n - 1) { //exit = 8, 8좌표
        maze[x][y] = PATH;
        return true;
    } else {
        maze[x][y] = PATH; //일단 방문하면 그린으로 바꿔주고, 중복방문 방지
        if (findPath(x - 1, y) || findPath(x, y + 1) ||
            findPath(x + 1, y) || findPath(x, y - 1)) {
            return true;
        }
        maze[x][y] = BLOCKED; //exit를 찾지 못했다면 red로 바꿔준다
        return false;
    }
}

console.log(findPath(0,0));
console.log(maze);
