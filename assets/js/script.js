const inputBox = document.getElementById("inputBox");

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  const divContainingTasks = document.getElementById("divContainingTasks");

  const p = document.createElement("p");
  p.id = "taskItems";
  divContainingTasks.appendChild(p);

  const inputCheckBox = document.createElement("input");
  inputCheckBox.id = "inputCheckBox";
  inputCheckBox.setAttribute("type", "checkbox");
  p.appendChild(inputCheckBox);

  const toDoEl = document.createElement("h3");
  toDoEl.id = "h3element";
  toDoEl.innerText = inputBox.value;
  p.appendChild(toDoEl);

  const delBtn = document.createElement("button");
  delBtn.setAttribute("id", "delete-btn");
  delBtn.innerText = "delete listing";
  p.appendChild(delBtn);

  console.log(inputCheckBox.checked);

  delBtn.addEventListener("click", function () {
    if (inputCheckBox.checked === true) {
      //delete item
      inputCheckBox.style.display = "none";
      toDoEl.style.display = "none";
      delBtn.style.display = "none";
    } else if (inputCheckBox.checked === false) {
      //do not delete item
      inputCheckBox.style.display = "inline-block";
      toDoEl.style.display = "inline-block";
      delBtn.style.display = "inline-block";
    }
  });
  
  //if clicked then strike through
  inputCheckBox.addEventListener("click", function () {
    console.log(inputCheckBox.checked);

    if (inputCheckBox.checked === true) {
      toDoEl.style.textDecoration = "line-through";
    } else if (inputCheckBox.checked === false) {
      toDoEl.style.textDecoration = "none";
    }
  });

  // clears input field
  inputBox.value = "";
});


