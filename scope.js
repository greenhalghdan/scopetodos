var todos = ["buy new turteles"];

var input = prompt("what would you like to do?");

while(input !== "quit"){

//handle input
	if(input === "list")	{
		listTodos();
	}	else if(input === "new")	{
		addTodo();
}	else if(input === "delete"){
		deleteTodo();
}
	//ask agan for ne input
	input = prompt("what would you like to do?");
}
		console.log("Ok you quit the App");

function listTodos(){
		console.log("**********")
		todos.forEach(function(todo, i){
		console.log(i + ":" + todo);
		});
		console.log("**********")
		console.log(todos);

}
function addTodo(){
	//ask for new todo
	var newTodo = prompt("Enter New todo");
	//add totodos array
	todos.push(newTodo);
	console.log("todo added")
}
function deleteTodo(){
	//ask for index of to do to be deleted
	var	index = prompt("enter index of todo to delete");
	//delete that to do
	//splice()
	todos.splice(index,1);
	console.log("deleted todo");
}