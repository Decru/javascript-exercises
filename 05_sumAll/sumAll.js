const sumAll = function(start, finish) {
    if (!Number.isInteger(start) || !Number.isInteger(finish)) return 'ERROR';
    if (start < 0 || finish < 0) return 'ERROR';

    let result = 0;
    while (start !== finish) {
        result += start;
        start < finish ? start++ : start--;
    }
    result += finish;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
