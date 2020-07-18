let todoItems = [];

//this method add's todo into my array and renders it on the screen
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}
//adds event, checkes if input is empty and then focuses the input
const form = document.querySelector('.todos-list-form');
form.addEventListener('submit', event => {
event.preventDefault();
const input = document.querySelector('.todo-input');

const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

// this method enables you to render text elements on the sreen by appending li tags for each input entered by the user
function renderTodo(todo) {
  const list = document.querySelector('.ui-list');
    list.insertAdjacentHTML('beforeend', `
        <li class="todo-item" data-key="${todo.id}">
        <input id="${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class="tick js-tick"></label>
        <span> ${todo.text}</span>
         <button  class = "delbtn"onclick = "deleteItem(${todo.id})"> X </button>
        
    </li>
 `);
  }

//  this function gets the position of the input and deletes that particular item
    function deleteItem(key){
    todoItems = todoItems.filter(item => item.id !== Number(key));
    const item = document.querySelector(`.todo-item`);
    item.remove();
    }


  
      
  
       
    
     
 

  
    
   