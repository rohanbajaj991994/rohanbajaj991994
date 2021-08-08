function duplicateCount(str) {
    var myObj = {},
        counter = 0;    
    var str = str.toLowerCase();
    for(var i = 0; i < str.length; i++){   

      if(!myObj[str[i]]){
          myObj[str[i]] = 1;
      } 
      else if(myObj[str[i]] < 2) {
          myObj[str[i]]+=1;
          counter++;
      }    
    }
    return counter;
}
