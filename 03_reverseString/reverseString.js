const reverseString = function(string) {
    let stringArray = string.split('');
    let resultArray = [];
    for (let i = stringArray.length - 1; i >= 0; i--) {
        resultArray.push(stringArray.pop());
    }
    return resultArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
