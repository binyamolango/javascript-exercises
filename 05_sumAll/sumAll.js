const sumAll = function(a, b) {
    let arr = [a, b];
    let sum = 0;
    if(a >= 0 && Number.isInteger(a) && b >= 0 && Number.isInteger(b)){
        arr.sort((a, b) => a - b);
        for(let i = arr[0]; i <= arr[1]; i++){
            sum += i;
        }
        return sum;
    }
    else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
