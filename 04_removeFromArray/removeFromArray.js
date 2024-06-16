const removeFromArray = function() {
    // converts arguments into array aside from first (given array)
    const args = Array.prototype.slice.call(arguments, 1);
    let filteredValues = arguments[0].filter((item) => !args.includes(item));
    return filteredValues;
};

// Do not edit below this line
module.exports = removeFromArray;
