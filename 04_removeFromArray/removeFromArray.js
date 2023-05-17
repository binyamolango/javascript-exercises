const removeFromArray = function() {
    let obj = arguments;
    let arr = obj[0];
    for(i = 1; i < obj.length; i++){
        if(arr.includes(obj[i])){
            arr.splice(arr.indexOf(obj[i]), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
