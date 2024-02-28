var listItems = document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
    var closeBtn = document.createElement("span");
    closeBtn.textContent = "\u00D7";
    closeBtn.className = "close";
    listItems[i].appendChild(closeBtn);
}

var closeBtns = document.querySelectorAll(".close");
for (var j = 0; j < closeBtns.length; j++) {
    closeBtns[j].addEventListener("click", function() {
        this.parentElement.style.display = "none";
    });
}

var tasks = document.querySelectorAll("li");

function showAll() {
    tasks.forEach(function(task) {
        task.style.display = "block";
    });
}

function showCompleted() {
    tasks.forEach(function(task) {
        if (task.classList.contains("checked")) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}

function showUncompleted() {
    tasks.forEach(function(task) {
        if (!task.classList.contains("checked")) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}

var ul = document.querySelector("ul");
ul.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);

function newElement() {
    var inputValue = document.getElementById("myInput").value.trim();
    if (!inputValue) {
        alert("Вам нужно что-то написать!");
        return;
    }
    var li = document.createElement("li");
    li.textContent = inputValue;
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    var closeBtn = document.createElement("span");
    closeBtn.textContent = "\u00D7";
    closeBtn.className = "close";
    li.appendChild(closeBtn);
    closeBtn.addEventListener("click", function() {
        this.parentElement.style.display = "none";
    });
}
function deleteAll() {
    var ul = document.getElementById("myUL");
    ul.innerHTML = "";
}
