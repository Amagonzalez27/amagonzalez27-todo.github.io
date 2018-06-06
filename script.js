var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
    return input.value.length
}

function createListElement() {
    var listItem = '<button class="delete">X</button>' + ' ' + '<span>' + input.value + '</span>';// the li format
    var li = document.createElement("li"); // create the li
    li.innerHTML = listItem; // assign listItem to the created li
    ul.appendChild(li); // append li to ul
    input.value = "";// clear the input
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(e) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick); // event on the enter button when clicked
input.addEventListener("keypress", addListAfterKeypress); // event on the enter button when pressed
ul.addEventListener('click', function(e) {
    // remove list
    if (e.target.className === "delete") {
        e.target.parentNode.remove();
    }
    // toggle line-through
    if (e.target.tagName === 'SPAN' ) {
        e.target.classList.toggle("done");
    }
})








