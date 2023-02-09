// update the shopping list app to do the following:

// 1. If you click on the list item, it toggles the .done  class on and off.

// 2. Add buttons next to each list item to delete the item
// when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

function handleDltBtn(btn, itm) {
  btn.addEventListener("click", function () {
    itm.classList.toggle("done");
  });
}

items.forEach(function (item) {
  var delBtn = item.lastChild;
  handleDltBtn(delBtn, item);
});

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(deleteButton);
  ul.appendChild(li);
  handleDltBtn(deleteButton, li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
