// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function (className){
	var resultArray = []
	//console.log(document.body.classList)
	//console.log('test: ' + document.body.children[0])
	var prefix = document.body //points to html <body>
  	function recursion (node) {
    	if(node.classList.contains(className)) { //if the line contains className, adds to resultArray
    	  resultArray.push(node);
    	}
    	for(var i = 0; i < node.children.length; i++) { //depending on how many nodes there are, it would look into "children" of that node
    	  recursion(node.children[i]); //performs recursion of that child node
    	}
  	};
  	recursion(prefix);
 	return resultArray;
};
