// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var result = '';

	// base case
	// typeOf = string or number
	// condition to find base case: object or array has no more nest
	var convertTypes = function (element) {
		if (typeof(element) == 'undefined') {
			result += 'null';
		} else if (typeof(element) == 'function') {
			result += 'null';
		} else if (typeof(element) == 'boolean') {
			result += element ? 'true' : 'false';
		} else if (typeof(element) == 'number') {
			result += element.toString();
		} else if (typeof(element) == 'string') {
			result += '"' + element + '"';
		} else if (typeof(element) == 'object') {
			if (Array.isArray(element)) {
				result += '[';
				if (element.length > 0) {
					_.each(element, function(arrayElement) {
						// need to adjust so last index doesn't indclude ','
						result += convertTypes(arrayElement) + ',';
					});
				}
				result += ']';
			} else {
				result += '{';
				_.each(element, function(value, key) {
					// need to adjust so last index doesn't indclude ','
					result += '"' + key.toString() + '":' + convertTypes(value) + ',';
				});
				result += '}';
			}
		}
	}

	convertTypes(obj);
	// recursive case
	// typeOf = object
	// if array then have to include []
	// if object then have to include {}

	return result;
};
