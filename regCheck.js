export default function(regNumber, location) {
    //console.log(regNumber);
   //console.log(location);
    return regNumber.endsWith(location) || regNumber.startsWith(location); 
 }