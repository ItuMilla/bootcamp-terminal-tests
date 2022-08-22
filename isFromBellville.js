export default function isFromBellville(regNumber) {
    if( regNumber.startsWith('CY') || regNumber.startsWith('cy') || regNumber.startsWith('cY') || 
       regNumber.startsWith('Cy') ) {
       return true
    } else {
       return false;
    }
 }
 
 // alert(isFromBellville('CY 567'));