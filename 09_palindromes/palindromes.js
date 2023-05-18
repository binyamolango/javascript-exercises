const palindromes = function (str) {
    let regex = /[^a-z|0-9]/g;
    let newStr = str.toLowerCase().replace(regex, "");
    if(newStr === newStr.split("").reverse().join("")){
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
