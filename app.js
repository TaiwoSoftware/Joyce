const user_name = document.querySelector('#userName');
const user_department = document.querySelector('#userDepartment');
const input_name = document.querySelector('.name');
const input_department = document.querySelector('.department');
const mainName = document.querySelector('#mainName');
const mainDepartment = document.querySelector('#mainDepartment');
const clearButton = document.querySelector('#clearButton');
const exitButton = document.querySelector('#exitButton');
const buttonContainer = document.querySelector('#buttonContainer');
const closed = document.querySelector('#closed');
const form = document.querySelector('#form');
user_name.addEventListener('click', (e) => {
    e.preventDefault();
    input_name.classList.remove('name')
});

user_department.addEventListener('click', (e) => {
    e.preventDefault();
    input_department.classList.remove('department');
});

clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    mainName.value = ''
    mainDepartment.value = '';
})

exitButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.add('remove');
    buttonContainer.classList.add('remove');
    closed.classList.remove('remove');
});