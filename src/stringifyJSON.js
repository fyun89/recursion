// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var test = [1,2,3,4]
var stringifyJSON = function(obj) {
  if (Array.isArray(obj) === true){ // your code goes here
  	var arrayCopy = obj.slice()
  	var arrayResult = '['
  	function arrayRecursive(){
	  	if (arrayCopy.length === 0){
	  		return;
	  	}else if (arrayCopy.length > 1){
	  		arrayResult += arrayCopy.shift() + ', '
	  		arrayRecursive()
	  	}else if (arrayCopy.length === 1){
	  		arrayResult += arrayCopy.shift()
	  		arrayRecursive()
	  	}
	}
	arrayRecursive()
  	return arrayResult + ']'
  }else if (typeof obj === object){
  	var objectCopy = {}
  	var objectResult = '{'
  	return;
  }else{
  	return toString(obj)
  }
};

console.log(typeof stringifyJSON(test))
