// get Html elements
const form = document.getElementById('todo');
const input = document.getElementById('inputText');
const todoL = document.getElementById('list');

const todos = JSON.parse(localStorage.getItem('arr'));
if (todos) {
    todos.forEach(todo => {
        revealList(todo)
    })

}
form.addEventListener('submit', e => {
    e.preventDefault();
    revealList();
    input.value = '';
});

function revealList(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo
    }

    if (todoText) {
        const elem = document.createElement('li');
        elem.innerText = todoText;
        todoL.appendChild(elem);
        appendList();

        elem.addEventListener('dblclick', (e) => {
            e.preventDefault();

            elem.remove();
            appendList();

        })
    }
}



function appendList() {
    const list = document.querySelectorAll('li');
    const arr = [];
    list.forEach(item => {
        arr.push(item.innerText);
    });

    localStorage.setItem('arr', JSON.stringify(arr));
}


