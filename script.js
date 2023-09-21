const todoList =JSON.parse(localStorage.getItem('todoList')) || [{
    name: '',
    dueDate:''
}
];
render();

function render(){
let todoListHTML='';

for(let i=1; i<todoList.length; i++){
    const todo= todoList[i];
    const name= todo.name;
    const date = todo.dueDate;
    const html = `
    <div>${name}</div>
    <div>${date}</div>
    <button onclick="
    todoList.splice(${i},1);
    render();
    save();
    "
    class="delete-button"
    >Delete</button>`;

    todoListHTML+= html;
}

document.querySelector('.js-todo').innerHTML= todoListHTML;

}




function addtodo(){
const inputElement= document.querySelector('.js-name');

const name= inputElement.value; 

const dateinput= document.querySelector('.js-date');
const dueDate = dateinput.value;

todoList.push(
    {
        name: name,
        dueDate: dueDate
    }
);

inputElement.value='';
render();
save();

}

function save(){
localStorage.setItem('todoList', JSON.stringify(todoList));
}