export default function(regNumbers, startStr) {
	var regNumArray = regNumbers.split(",");
  	//console.log(regNumArray);
  	
  	var counter = 0;
  	for(var i = 0; i < regNumArray.length; i++) {
      regNumArray[i] = regNumArray[i].trim();
    	if(regNumArray[i].startsWith(startStr)) {
         counter++;
      }
    }
  	return counter;
}