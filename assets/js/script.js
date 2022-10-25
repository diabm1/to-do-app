const inputBox = document.getElementById("inputBox");

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function handleClick(event) {
  // if you are submitting a form (prevents page reload)
  event.preventDefault();

  //appendChild("divContainingTasks")
  //appendChild("taskItems")
  //appendChild

  // const taskItems = document.getElementById("taskItems");
  const divContainingTasks = document.getElementById("divContainingTasks")

  const span = document.createElement("span")
  span.id = "taskItems"
  // span.id = "sideBySide"
  // const sideBySide = document.getElementById("sideBySide")
  const sideBySide = document.getElementById("taskItems")
  divContainingTasks.appendChild(span.id)

  

  const inputCheckBox = document.createElement("input");
  inputCheckBox.id = "inputCheckBox";
  inputCheckBox.setAttribute("type", "checkbox");
  taskItems.appendChild(inputCheckBox);


  const toDoEl = document.createElement("h3");
  toDoEl.id = "h3element";
  toDoEl.innerText = inputBox.value;
  taskItems.appendChild(toDoEl);

  //if clicked then strike through
  inputCheckBox.addEventListener("click", function () {
    toDoEl.style.textDecoration = "line-through";
    // toDoEl.style.textDecoration = "";
  });


  

  // console.log(taskItems);

  // clears input field
  inputBox.value = "";
});

// function display(){
//     inputBox.value
// }

// A user can create a todo item by entering text into an input box and pressing a button
// function myFunction(e) {
//   // taskItems.innerHTML = `<h3>${inputBox.value}</h3>`

//   //Ok, now I have it return whatever I write in the task search box, now, how do I stack another task item on top of it?

//   //A list of created todo items are shown on the screen

//   //store it in local storage
//   //create an object out of the list items and whenever submit button is clicked it adds it to that list, maybe try an empty array?
//   // pushToArray()

//   // let emptyArr = [];

//   // for (let i = 0; i < 5; i++) {
//   //   emptyArr.push(inputBox.value);
//   //   taskItems.innerHTML = `<h3>${inputBox.value}</h3>`;
//   // }
//   // 👇️ if you are submitting a form (prevents page reload)
//   e.preventDefault();

//   // Send value to server
//   console.log(inputBox.value);

//   // 👇️ clear input field
//   inputBox.value = "";
// }

// function pushToArray() {
//   let emptyArr = [];

//   // console.log(myFunction())

//   //if myFunction is triggerd then push inputBox.value into the array
//   if (myFunction()) {
//     emptyArr.push(inputBox.value);
//   }
// }
