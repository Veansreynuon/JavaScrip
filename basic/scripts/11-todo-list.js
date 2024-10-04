const todoList = [{
   name: 'make dinner',
    dueDate: '2000-01-01'
}, {
    name:'wash dishes',
    dueDate: '2000-01-01'
    }];

// render mean display something on the page.
function renderTooList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject; //take the name property of the object and put it on the variable is called Destructuring.
        const html = `
        <p>
         ${name} ${dueDate}
         <button onclick=" todoList.splice(${i}, 1);
         renderTooList();
         "> Delete</button>
        </p>
        `;// generating the html
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}
renderTooList();




function addTodo() {
    const inputElement = document.querySelector('.js-name');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date');
    const dueDate= dateInputElement.value;

    todoList.push({ // shorthand property syntax
       // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });
    console.log(todoList);
    
    inputElement.value = '';
    
    renderTooList();
    
}