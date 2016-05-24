
var taskInput = document.getElementById("new-task"); 
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); 
var completedTasksHolder = document.getElementById("completed-tasks"); 

var createNewTaskElement = function(taskString) {
    ///Create list item
    var listItem = document.creatElement("li");
    
     ///input (checkbox)
     var checkbox = document.creatElement("input"):
        ///label
     var label = document.creatElement("label");
        ///input (text)
     var editInput = document.creatElement("input");
        ///button.edit
     var editButton = document.creatElement("button");
        ///button.delete
     var deleteButton = document.creatElement("button");
        ///Each element needs modifying
        
        ///Each item needs appending
         
    return listItem;
}

///Add a new task
var addTask = function() {
    console.log("Add task...");
      ///Create new list item with the text from #new-task:
 var listItem = createNewTaskElement("Some new task");   
       
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
var deleteTask = function() {
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

var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
       console.log("Bind list item events");
        ///select taskListItem's children
        var checkbox = taskListItem.querySelector("input[type=checkbox]");
        var editButton = taskListItem.querySelector("button.edit");
        var deleteButton = taskListItem.querySelector("button.delete");
        
        ///bind editTask to edit button
        editButton.onclick = editTask;
        ///bind deleteTask to delete button
        deleteButton.onclick = deleteTask;
        ///bind checkboxEventHandler to checkbox
        checkbox.onchange = checkboxEventHandler;
}

addButton.onclick = addTask;

///Cycle over the incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
            ///bind events to list item 's children (taskCompleted)
     bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);   
}      
        
///Cycle over the completedTasksHolder ul list items
 for(var i = 0; i < completedTasksHolder.children.length; i++) {   
        ///bind events to list item's children (taskIncomplete)
      bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
 }
         