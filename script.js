const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let error = document.getElementById("error");

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "" || email === "" || message === ""){
        error.style.color="yellow";
        error.textContent="Please fill all fields";
        return;
    }

    if(!emailPattern.test(email)){
        error.style.color="yellow";
        error.textContent="Invalid Email";
        return;
    }

    error.style.color="lightgreen";
    error.textContent="Form Submitted Successfully ✅";
});

function addTask(){

    let input =
    document.getElementById("taskInput");

    let task =
    input.value.trim();

    if(task === "") return;

    let li =
    document.createElement("li");

    li.innerHTML = `
    ${task}
    <button class="delete"
    onclick="this.parentElement.remove()">
    Delete
    </button>
    `;

    document
    .getElementById("taskList")
    .appendChild(li);

    input.value="";
}