const input =document.querySelector("input");
const addtodo = document.querySelector("#add-todo");
const ul = document.querySelector("ul");

let todo = [];


addtodo.addEventListener("click",() => {
    let text = input.value;
    //createTodo(text);
    addTodoList();
    input.value = '';
});

ul.addEventListener('click',(el) => {
    if(el.target.tagName === 'LI') {
        el.target.classList.toggle("checked");
    }
});

function addTodoList(){
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    let text = document.createTextNode(input.value);
    li.appendChild(text);
    if (input.value === '') {
        alert('Enter Todo');        
    } else {
        ul.appendChild(li);
        // delete oprator insertion
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.append(span);
    }

}

function createTodo(text){
    const todolist = {
        text,
        id: Date.now()
    }
    todo.push(todolist);
}