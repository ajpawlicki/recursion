// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	// Store elements in an array
	// Use recursion somehow
	// Need to create internal function to use push and recursion together.

	var nodeList = [];

	//console.log(document.body.classList);

	// Create search function to look for elements with className
	var search = function(node) {
		// base case
		if(_.contains(node.classList, className)) {
			console.log('node: ', node);
			nodeList.push(node);
		}
		// recursive case
		_.each(node, function(childNode) {
			console.log('childNode: ', childNode);
			search(childNode);
		});
	}

	search(document.body);

	console.log(nodeList);
	
	return nodeList;
};
