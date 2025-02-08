let lft=document.querySelector(".left-container .pending");
let rt=document.querySelector(".right-container .done");
const button=document.querySelector(".btn");
let input=document.querySelector(".inp");
let given=input.value;
function addtolist(task) {
    if (task.trim() === ""){
        alert("INVALID INPUT!");
        return;
    }
    else {
        // given=task;
        // console.log(given)   
    const li = document.createElement("li");
    li.textContent=task
    li.dataset.taskValue=task
    const completebtn = document.createElement("button");
    completebtn.textContent = "✔";
    completebtn.classList.add("complete-btn");
    completebtn.addEventListener("click", function () {
        movetocompleted(li);
    });
    li.appendChild(completebtn);
    lft.appendChild(li);
    input.value = "";
    }
}
function movetocompleted(task) {
    lft.removeChild(task);

    // task.removeChild(task.querySelector(".complete-btn"));
    task.innerHTML = task.dataset.taskValue;
    // rt.appendChild(task); 
    const removebtn =document.createElement("button");
    removebtn.textContent="✘";
    removebtn.classList.add("remove-btn");
    removebtn.addEventListener("click",function(){
        addtolist(task.dataset.taskValue);
        rt.removeChild(task);
    })
    const deletebtn=document.createElement("button");
    deletebtn.textContent="🗑️";
    deletebtn.classList.add("remove-btn");
    deletebtn.addEventListener("click",function(){
        rt.removeChild(task);
    })
    task.appendChild(removebtn);
    task.appendChild(deletebtn);
    rt.appendChild(task); 
}

button.addEventListener("click", function () {
    addtolist(input.value);
});
