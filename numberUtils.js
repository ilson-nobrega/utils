var oUtils = require("./objectUtils");

module.exports.getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.isBetween = function(value, min, max, inclusive){
	if(oUtils.isUndefined(inclusive)) inclusive = true;
	
	if(inclusive) return (value >= min && value <= max);
	else return (value > min && value < max);
};