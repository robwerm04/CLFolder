
var taskInput = document.getElementById("new-task"); 
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); 
var completedTasksHolder = document.getElementById("completed-tasks"); 



///Add a new task
var addTask = function() {
    console.log("Add task...");
   ///When button is pressed
    ///Create new list item with the text from #new-task:
        ///input (checkbox)
        ///label
        ///input (text)
        ///button.edit
        ///button.delete
        ///Each element needs modified and append 
}
    


///Edit an existing task
var editTask = function() {
    ///When the edit button is pressed
        ///if the class of the parent is .editMode
            ///Switch from .editMode
            ///label text becomes the input's value
        ///else
            ///Switch to .editMode
            ///input value becomes the label's text
        ///Toggle .editMode on the parent    
            
}
    


///Delete an existing task
var deleteTAsk = function() {
    ///when the delete button is pressed
        ///Remove the parent list from the ul
}
    


///Mark a task as complete
var taskCompleted = function() {
    /// When the checkbox is checked
        ///Append the task list item to the #completed-tasks
}
    

///Mark a task as incomplete
var taskIncomplete = function() {
    ///When the checkbox is unchecked
        ///Append the task list item to the #incomplete-tasks
}

///Set the click handler to the addTask function 

addButton.onclick = addTask;