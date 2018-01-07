// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj == 'string'){
    var strArr = String(obj).split();
    return "\"" + obj + "\"";
  }
  else if (Array.isArray(obj)) {
    var result = "";
    for (let i = 0; i < obj.length; i++){
      if (result != ""){
        result = result + "," + stringifyJSON(obj[i]);
      }
      else {
        result = stringifyJSON(obj[i]);
      }
    }
    return "[" + result + "]";
  }
  else if (obj !== null && typeof obj === 'object') {
    var result = "";
    for (var prop in obj){
      //JSON does not allow you to stringify functions or undefined values
      if (typeof obj[prop] !== 'function' && typeof obj[prop] !== 'undefined'){
        if (result != ""){
          result = result + "," + stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]);
        }
        else {
          result = stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]);
        }
      }
    }
    return "{" + result + "}";
  }
  else {
    return String(obj);
  }
};
