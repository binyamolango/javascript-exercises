const fibonacci = function(k) {
    let arr = [0, 1];
    if(Number.isInteger(k)){
        if(k < 0){
            return "OOPS";
        }
        else if(k === 0){
            return 0;
        }
        for(let i = 0; ; i++){
            let x = arr[i] + arr[i+1];
            arr.push(x);
            if(arr.length - 1 === k){
                return arr[k];
            }
        }
    }
    else if(!isNaN(k)){
        let newK = parseInt(k);
        if(newK < 0){
            return "OOPS";
        }
        else if(newK === 0){
            return 0;
        }
        for(let i = 0; ; i++){
            let x = arr[i] + arr[i+1];
            arr.push(x);
            if(arr.length - 1 === newK){
                return arr[newK];
            }
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
