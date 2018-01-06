// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  if (this.className != undefined){
    if (this.className.indexOf(className) > -1){
      result.push(this);
    }
  }
  if (this === window){
    for (let i = 0; i < this.document.children.length; i++){
      result = result.concat(getElementsByClassName.call(this.document.children[i], className));
    }
  }
  else {
    if (this.children != undefined){
      for (let i = 0; i < this.children.length; i++){
        result = result.concat(getElementsByClassName.call(this.children[i], className));
      }
    }
  }
  return result;
};

