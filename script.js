var userinput = document.getElementById("userinput");
var li = document.querySelector("li");
var button = document.getElementById("enter");
var ol = document.querySelector("ol");
var eraseIcon = document.getElementsByClassName("delete");
var removeButton = document.getElementById("removeItem");

for (i = 0; i < eraseIcon.length; i++) {
  eraseIcon[i].addEventListener("click", removeParent);
}

function removeParent(e) {
  //   console.log(e.target.parentNode);
  e.target.parentNode.remove();
}

function checkLength() {
  return userinput.value.length != 0;
}

function printUserInput() {
  var icn = document.createElement("i");
  icn.classList.add("fa-solid", "fa-trash");
  icn.onclick = removeParent;

  li = document.createElement("li");
  li.append(document.createTextNode(userinput.value));

  ol.append(li);
  li.append(icn);
  userinput.value = "";
}

function inputAfterClick() {
  printUserInput();
}

function inputAfterEnter(event) {
  if (checkLength() && event.keyCode === 13) {
    printUserInput();
  }
}

function clearList() {
  // userinput.target.parentNode.parentNode.remove();
  // var ul = root;
  ol.innerHTML = "";
}

removeButton.addEventListener("click", clearList);

userinput.addEventListener("keypress", inputAfterEnter);

button.addEventListener("click", inputAfterClick);
