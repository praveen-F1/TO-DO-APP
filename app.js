// VARIABLE DECLARATION

let input = document.getElementById("todo-input");
let btn = document.getElementById("todo-button");
let list = document.querySelector(".todo-list");
let completedTab = document.getElementById("Completed");
let deletedTab = document.getElementById("Deleted");
let completedList = document.querySelector(".completed-todo-list");
let deletedList = document.querySelector(".deleted-todo-list");
let completedHead = document.getElementById('completedHead');

//ENTER CLICK EVENTS

input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        btn.click();
        input.value = "";
    }
})

//BUTTON CLICK EVENTS
let a;
let count = 0;
btn.addEventListener('click', () => {
    let txt = input.value;
    if(txt === "") {
        alert("Input field can not ne empty");
    }else{
        count = count + 1;

        let div = document.createElement('div');
        
        let li = document.createElement('li');
        li.innerHTML = txt;
        div.appendChild(li);

        let cbtn = document.createElement('button');
        cbtn.innerHTML = '<i class="fas fa-check"></i>';
        cbtn.setAttribute('class','check');
        div.appendChild(cbtn);

        let tbtn = document.createElement('button');
        tbtn.innerHTML = '<i class="fas fa-trash"></i>';
        tbtn.setAttribute('class','trash');
        div.appendChild(tbtn);

        cbtn.setAttribute('onclick', 'checkId(this)');
        tbtn.setAttribute('onclick', 'deleteId(this)');
        div.setAttribute('id', 'item' + count);

        list.insertBefore(div, list.childNodes[0]);
        input.value = "";

        
        a = list.children.length;
        console.log(a); 
    }
});


//ON CHECKED BUTTON CLICK EVENTS

function checkId(elem)
{
    let divId = elem.parentNode.id;
    document.getElementById(divId).style.display = "none";
    completed(divId);
}

//ON DELETED BUTTON CLICK EVENTS

function deleteId(elem)
{
    let divId = elem.parentNode.id;
    document.getElementById(divId).style.display = "none";
    deleted(divId);
}

//ADD TASKS TO COMPLETED CONTAINER WHEN THE COMPLETED BUTTON IS CLICKED

function completed(divId) {
    let element = document.getElementById(divId);
    element.style.display="flex";
    completedList.insertBefore(element, completedList.childNodes[0]);
    completedList.style.display = "flex";
}

//ADD TASKS TO DELETED CONTAINER WHEN THE DELETED BUTTON IS CLICKED

function deleted(divId) {
    let element = document.getElementById(divId);
    element.style.display="flex";
    deletedList.insertBefore(element, deletedList.childNodes[0]);
    deletedList.style.display = "flex";
}



function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

