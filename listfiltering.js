function filter_list(l) {
  // Return a new array with the strings filtered out
  var array = new Array();
  for(i=0;i<l.length;i++){
    if(typeof l[i] != "string"){
      array.push(l[i])
    }
  }
  return array
}
