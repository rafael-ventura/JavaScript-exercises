//Author : Rafael Ventura
//function which verifies if the typeof the variable "value" is a number and if it´s a integer then returns a boolean value;
function is_integer(value){
	if((typeof(value) === "number") && (Math.floor(value) == value) ){
    return true;
	} else {
		return false;
	}
}


//function which verifies if the typeof the variable "value" is a string and returns a boolean value;
function is_string(value){
    if(typeof(value) === "string") {
        return true;
    } else {
        return false;
    }
}

//function which verifies if the typeof the variable "value" is a boolean and returns a boolean value;
function is_boolean(value){
    if(typeof(value) === "boolean") {
        return true;
    } else {
        return false;
    }
}
