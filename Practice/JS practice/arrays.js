//print elements of an array in reverse
var numbers = [1, 2, 3, 4];
var letters = ["a", "b", "c", "d", "e"];

function printReverse(array){
	for (var i = array.length; i > 0; i--) {
		console.log(array[i - 1]);
	}
}


//returns true if all elemenets in array are uniform
var uniform = [1, 1, 1, 1]
var different = [1, 2, 3, 4]
var almostUniform = [1, 1, 1, 4] 

function isUniform(list){
	var first = list[0];
	for (var i = 1; i < list.length; i++) {
		if(list[i] !== first){
	 		return false;
		} 
		}
	 	return true;
	 }


//returns sum of all numbers in array
var factors = [1, 2, 3, 4]
var moreFactors = [1, 2, 3, 4, 5]

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
	} 


//return maximum number in array
var maxTest = [1, 345, 25, 400, 5]

function max(arr){
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}