const removeFromArray = function(originalArray) {
    if (arguments.length <= 1) { return originalArray }

    const argArray = argToArray(arguments);
    const itemsToBeFiltered = argArray.slice(1, argArray.length);

    for (let item of itemsToBeFiltered) {
        originalArray = originalArray.filter(value => value !== item);
    }
    return originalArray
};

function argToArray(argObject) {
    const result = [];
    for (let i = 0; i < argObject.length; i++) {
        result.push(argObject[i]);
    }
    return result;
}
// Do not edit below this line
module.exports = removeFromArray;
