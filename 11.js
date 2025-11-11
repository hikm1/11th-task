let tasks = [];
let list = document.getElementById("task-list");
let countDisplay = document.getElementById("task-count");

function showTasks(){
  list.innerHTML = "";
  for(let i=0; i<tasks.length; i++){
    let li = document.createElement("li");
    li.textContent = tasks[i];

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      tasks.splice(i,1);
      showTasks();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  }
  countDisplay.textContent = "Total Tasks: " + tasks.length;
}

document.getElementById("add-btn").onclick = () => {
  let input = document.getElementById("task-input");
  let newTask = input.value.trim();

  if(newTask !== ""){
    tasks.push(newTask);
    input.value = "";
    showTasks();
  }else{
    alert("Please write something first!");
  }
};

showTasks();