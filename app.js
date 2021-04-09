const button = document.getElementById('button');
const input = document.getElementById('task');
const taskList = document.getElementById('task-list');

button.addEventListener('click', function(a){
    a.preventDefault();
    
    if(input.value == ""){
        alert('add a new task');
    }
    const li = document.createElement('li');
    const text = document.createElement("span");
    text.innerText = input.value
    text.id = 'content';
    const i = document.createElement('i')
    i.className ='far fa-check-square';
    i.id = "check";
    const e = document.createElement('i');
    e.className = 'fas fa-trash-alt';
    e.id = "trash";
    li.appendChild(i);
    li.appendChild(text);
    li.appendChild(e);
    taskList.appendChild(li);
    input.value = ""; 

    i.addEventListener('click', function(){
        if(text.style.textDecoration != "line-through"){
        text.style.textDecoration = 'line-through';    
        i.className = "fas fa-check-square" 
        }else{
            text.style.textDecoration = "none"
            i.className = "far fa-check-square";
        }  
    })
    e.addEventListener('click', function(){
        li.remove();
    })
})

button.addEventListener('mouseover', ()=> (button.value = 'Add'));
button.addEventListener('mouseout', () => (button.value = 'Task'));



