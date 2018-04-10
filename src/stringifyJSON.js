// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var test = {a:'apple'}
var stringifyJSON = function(obj) {
  if (Array.isArray(obj) === true){ // your code goes here
  	var arrayCopy = obj.slice()
  	var arrayResult = '['
  	function arrayRecursive(){
	  	if (arrayCopy.length === 0){
	  		return;
	  	}else if (arrayCopy.length > 1){
	  		var arrayItem = arrayCopy.shift()
	  		if (typeof arrayItem === 'string' || Array.isArray(arrayItem) === true || typeof arrayItem === 'object'){
	  			arrayItem = stringifyJSON(arrayItem);
	  		}
	  		arrayResult += arrayItem + ',';
	  		arrayRecursive();
	  	}else if (arrayCopy.length === 1){
	  		var arrayItem2 = arrayCopy.shift()
	  		if (typeof arrayItem2 === 'string' || Array.isArray(arrayItem2) === true || typeof arrayItem2 === 'object'){
	  			arrayItem2 = stringifyJSON(arrayItem2);
	  		}
	  		arrayResult += arrayItem2;
	  		arrayRecursive();
	  	}
	}
	arrayRecursive()
  	return arrayResult + ']'
  }else if (typeof obj === 'object' && obj !== null){
  	var objectCopy = Object.assign(obj)
  	var objectResult = '{'
  	var objectKeys = []
	for (var key in objectCopy){
	  	objectKeys.push(key);
	}
  	function objectRecursive(){
	  	if (objectKeys.length === 0){
	  		objectResult += '}'
	  		return;
	  	}else if (objectKeys.length > 1){
	  		var keyCopy = objectKeys.shift();
	  		if (typeof objectCopy[keyCopy] !== 'function' && typeof objectCopy[keyCopy] !== 'undefined'){
	  			var objectValue = stringifyJSON(objectCopy[keyCopy]);
	  			objectResult += '"'+keyCopy+'":' + objectValue + ',';
	  		}
	  	}else if (objectKeys.length === 1){
	  		var keyCopy = objectKeys.shift();
	  		if (typeof objectCopy[keyCopy] !== 'function' && typeof objectCopy[keyCopy] !== 'undefined'){
	  			var objectValue = stringifyJSON(objectCopy[keyCopy]);
	  			objectResult += '"'+keyCopy+'":'+objectValue
	  		}
	  	}
	  	objectRecursive()
  	}
  	objectRecursive()
  	return objectResult;
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
