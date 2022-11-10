const repeatString = function(string, repeatTimes) {
    if (repeatTimes < 0) {return 'ERROR'}
    let result = '';
    while (repeatTimes > 0) {
        result += string;
        repeatTimes--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
