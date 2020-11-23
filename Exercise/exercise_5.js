function changeNum(num){
    return num.split('').map(n =>n >5 ? 1 : 0).join('');
}

let inputNum = '34567'

console.log(changeNum(inputNum))

