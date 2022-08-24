export default function(year){
	var now = new Date();
    var currentYear = now.getFullYear();

    if(isNaN(year)) {
        return 'Number required'
    }
    
    return (currentYear) - (year);
}