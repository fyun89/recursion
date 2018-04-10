// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var test = ['hi']
var stringifyJSON = function(obj) {
  if (Array.isArray(obj) === true){ // your code goes here
  	var arrayCopy = obj.slice()
  	var arrayResult = '['
  	function arrayRecursive(){
	  	if (arrayCopy.length === 0){
	  		return;
	  	}else if (arrayCopy.length > 1){
	  		var arrayItem = arrayCopy.shift()
	  		if (typeof arrayItem === 'string' || Array.isArray(arrayItem) === true){
	  			arrayItem = stringifyJSON(arrayItem)
	  			//console.log(arrayItem)
	  		}
	  		arrayResult += arrayItem + ','
	  		arrayRecursive()
	  	}else if (arrayCopy.length === 1){
	  		var arrayItem2 = arrayCopy.shift()
	  		if (typeof arrayItem2 === 'string' || Array.isArray(arrayItem2) === true){
	  			arrayItem2 = stringifyJSON(arrayItem2)
	  			//console.log(arrayItem2)
	  		}
	  		arrayResult += arrayItem2
	  		arrayRecursive()
	  	}
	}
	arrayRecursive()
  	return arrayResult + ']'
  }else if (typeof obj === 'object' && obj !== null){
  	var objectCopy = {}
  	var objectResult = '{'
  	return;
  }else if (typeof obj === 'string'){
  	return '"'+obj+'"';
  }else if (typeof obj === 'number'){
  	return obj.toString();
  }else if (typeof obj === 'boolean'){
  	return obj.toString();
  }else if (obj === null && typeof obj === 'object'){
  	return 'null';
  }
};
//console.log(typeof testtest)

//console.log(stringifyJSON(null))
