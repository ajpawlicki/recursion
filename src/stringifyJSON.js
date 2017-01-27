// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var result = [];

	// base case
	// typeOf = string or number
	// condition to find base case: object or array has no more nest
	var convertTypes = function (element) {
		if (typeof(element) == 'undefined' || typeof(element) == 'function' || element == null) {
			result.push('null');
		} else if (typeof(element) == 'boolean') {
			result.push(element ? 'true' : 'false');
		} else if (typeof(element) == 'number') {
			console.log(element);
			result.push(element.toString());
		} else if (typeof(element) == 'string') {
			result.push('"' + element + '"');
		} else if (typeof(element) == 'object') {
			if (Array.isArray(element)) {
				result.push('[');
				if (element.length > 0) {
					_.each(element, function(arrayElement, index) {
						// need to adjust so last index doesn't indclude ','
						// console.log(arrayElement);
						// need to return function!
						// push in result array instead
						convertTypes(arrayElement);
						if (index < element.length - 1) {
							result.push(',');
						}
					});
				}
				result.push(']');
			} else {
				//console.log('object: ', element);
				result.push('{');
				var objLength = Object.keys(element).length;
				_.each(element, function(value, key) {
					// need to adjust so last index doesn't indclude ','
					result.push('"' + key.toString() + '":');
					convertTypes(value);
					result.push(',');
				});
				if (result[result.length - 1] != '{') {
					result.pop();
				}
				result.push('}');
			}
		}
	}

	convertTypes(obj);
	// recursive case
	// typeOf = object
	// if array then have to include []
	// if object then have to include {}

	return result.join('');
};
