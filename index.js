document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Enter a task to add:")
    }
    else {
        document.querySelector('#tasks').innerHTML += `<div class ="task"><span id="taskname"> ${"Task: "+document.querySelector('#newtask input').value}
        </span>
        <span id="taskname"> ${"Due: "+document.getElementById("due").value}
        </span>
        <span id="taskname"> ${"Priority: "+document.getElementById("priority").value}
        </span>
       <button id="del">DELETE</button>
        </div>
        `;
        var current_task = document.querySelectorAll("#del");

        for (var i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function () {
                if(confirm("Are you sure to remove the todo"))
                this.parentNode.remove();
            }
        }
    }
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
            this.classList.toggle('completed');
        }
    }
    document.querySelector("#newtask input").value = "";

}