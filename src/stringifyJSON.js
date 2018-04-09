// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (Array.isArray(obj) === true){ // your code goes here
  	var arrayResult = '['
  	//console.log(obj[1])
  	for (var i = 0; i < obj.length; i++){
  		if (i < obj.length-1){
  			//console.log(obj[i].toString())
  			arrayResult += obj[i].toString() + ', '
  		}else if (i === obj.length - 1){
  			arrayResult += obj[i].toString()
  		} 
  	}
  	console.log(arrayResult+']')
  	return arrayResult + ']'
  }else if (typeof obj === object){

  }else{
  	return toString(obj)
  }
};
