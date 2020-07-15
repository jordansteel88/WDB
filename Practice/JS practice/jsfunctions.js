window.setTimeout(function() {

var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){

	if(input === "list"){
		listToDos();
	}
	else if(input === "new") {
		addToDos();
	} 
	else if(input ==="delete"){
		deleteToDos();
	}

	input = prompt("What would you like to do?");
}
	alert("Alright, fine.");


function listToDos(){
	console.log("**********")
	todos.forEach(function(item, i){
			console.log(i + ": " + item)
	});
	console.log("**********")
}

function addToDos(){
	var newToDo = prompt("Enter new to-do");
	todos.push(newToDo);
	console.log("Item added.");
}

function deleteToDos(){
	var index = prompt("Enter index of item to delete");
	todos.splice(index, 1);
	console.log("Item deleted.")
}













}, 500);