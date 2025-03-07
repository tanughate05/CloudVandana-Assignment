import "./styles.css";

function addTask() {
  const newtask = document.createElement("li");
  const taskList = document.getElementById("taskList");
  taskList.appendChild(newtask);
  newtask.textContent = document.getElementById("input-field").value;

  document.getElementById("input-field").value = " ";
  deletetask(newtask);
}
function deletetask(newtask) {
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  newtask.appendChild(deletebtn);
  deletebtn.onclick = function () {
    newtask.remove();
  };
}
