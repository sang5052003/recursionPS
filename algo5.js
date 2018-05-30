//N-Queen, 각 레벨마다 겹치지 않는 체스 퀸
let n = 4;
let cols = [];
function promising(level) {
    for(let i = 1; i < level; i++) {
        if(cols[i] === cols[level]) { //같은 열에 있으면
            return false;
        } else {
            let rt = cols[level] - cols[i];
            if (rt < 0) {
                rt *= -1;
            }
            if((level - i) === rt) { //같은 대각선 줄이면, 삼각형 가로와 세로의 길이가 같으면 대각선 위치
                return false;
            }
        }
    }
    return true;
};

function queens(level) {
    if(!promising(level)){ //이전 레벨들과 충돌 하는지 검사 = 1 ~ (level - 1)이 level과 충돌 하는지
        return false;
    } else if(level === n) { //마지막 레벨까지 왔으면
        for (let i = 1; i <= n; i++){
            console.log('lv' + i + ' - ' + cols[i]);
        }
        return true;
    }

    //마지막 레벨이 아니면 다음 레벨 검사, recursion
    for(let i = 1; i <= n; i++) {
        cols[level + 1] = i;
        if(queens(level + 1)) {
            return true;
        }
    }

    return false;
};

console.log(queens(0));