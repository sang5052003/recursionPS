function reversePrintChars(str) {
    if (str.length === 0) {
        return;
    } else {
        reversePrintChars(str.substring(1));
        console.log(str.charAt(0));
    }
}

reversePrintChars("asdf");

function printBinary(n) {
    if (n < 2) {
        console.log(n);
    } else {
        printBinary(n / 2);
        console.log(n % 2);
    }
}

printBinary(8);

//매개변수 명시화

let dataArr = [5, 3, 2, 1, 4];

//데이터의 구간을 명시적으로 표현, begin, end
function search(dataArr, begin, end, target) {
    if (begin > end) {
        return -1;
    } else if (target === dataArr[begin]) {
        return begin;
    } else {
        return search(dataArr, begin + 1, end, target);
    }
}

console.log("=========");
console.log(search(dataArr, 0, dataArr.length - 1, 1));

//binary search
function search2(dataArr, begin, end, target) {

    //base case, 데이터가 0
    if (begin > end) {
        return -1;

    } else {

        //중간
        let mid = (end + begin) / 2;
        if (dataArr[mid] === target) {
            return mid;
        }

        //앞에서
        let idx = search(dataArr, begin, mid - 1, target);
        if (idx !== -1) { //찾은 결과가 -1이 아니면 target을 찾았다
            return idx;

        //뒤에서
        } else { //앞은 이미 검색했으므로 뒤에서
            return search(dataArr, mid + 1, end, target);
        }

    }
}

console.log("=========");
console.log(search2(dataArr, 0, dataArr.length - 1, 1));