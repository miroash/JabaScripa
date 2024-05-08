document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll<HTMLLIElement>("li");

    listItems.forEach(function (item) {
        const closeBtn = document.createElement("span");
        closeBtn.textContent = "\u00D7";
        closeBtn.className = "close";
        item.appendChild(closeBtn);
    });

    const closeBtns = document.querySelectorAll<HTMLSpanElement>(".close");
    closeBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            this.parentElement?.remove();
        });
    });

    const tasks = document.querySelectorAll<HTMLLIElement>("li");

    function showAll() {
        tasks.forEach(function (task) {
            task.style.display = "block";
        });
    }

    function showCompleted() {
        tasks.forEach(function (task) {
            if (task.classList.contains("checked")) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
            }
        });
    }

    function showUncompleted() {
        tasks.forEach(function (task) {
            if (!task.classList.contains("checked")) {
                task.style.display = "block";
            } else {
                task.style.display = "none";
            }
        });
    }

    const ul = document.querySelector<HTMLUListElement>("ul");
    ul?.addEventListener("click", function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    });

    function newElement() {
        const inputValue = (document.getElementById("myInput") as HTMLInputElement).value.trim();
        if (!inputValue) {
            alert("Вам нужно что-то написать!");
            return;
        }
        const li = document.createElement("li");
        li.textContent = inputValue;
        document.getElementById("myUL")?.appendChild(li);
        (document.getElementById("myInput") as HTMLInputElement).value = "";

        const closeBtn = document.createElement("span");
        closeBtn.textContent = "\u00D7";
        closeBtn.className = "close";
        li.appendChild(closeBtn);
        closeBtn.addEventListener("click", function () {
            this.parentElement?.remove();
        });
    }

    function deleteAll() {
        const ul = document.getElementById("myUL");
        if (ul) {
            ul.innerHTML = "";
        }
    }
});