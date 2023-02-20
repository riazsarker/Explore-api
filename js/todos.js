

function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=> res.json())
    .then(data=>displayTodos(data))
    
}

function displayTodos(todos){
    const todoContainer = document.getElementById("todo-contianer");
    for(const todo of todos){
        const todoDiv =document.createElement('div');
        
        todoDiv.innerHTML = `
        <h3> Title: ${todo.title} </h3>

        `;
        todoContainer.appendChild(todoDiv);
    }
  }

  loadTodos();