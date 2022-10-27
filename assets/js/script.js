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

  const p = document.createElement("p")
  p.id = "taskItems"
  // span.id = "sideBySide"
  // const sideBySide = document.getElementById("sideBySide")
  // const sideBySide = document.getElementById("taskItems")
  divContainingTasks.appendChild(p)

  

  const inputCheckBox = document.createElement("input");
  inputCheckBox.id = "inputCheckBox";
  inputCheckBox.setAttribute("type", "checkbox");
  p.appendChild(inputCheckBox);


  const toDoEl = document.createElement("h3");
  toDoEl.id = "h3element";
  toDoEl.innerText = inputBox.value;
  p.appendChild(toDoEl);

  const delBtn = document.createElement("button")
  delBtn.setAttribute('id', 'delete-btn')
  delBtn.innerText = "delete listing"
  p.appendChild(delBtn)
  delBtn.addEventListener("click", function() {  
      inputCheckBox.style.display = "none"
      toDoEl.style.display = "none"
      delBtn.style.display = "none"
  })

  //if clicked then strike through
  inputCheckBox.addEventListener("click", function () {
    toDoEl.style.textDecoration = "line-through";
    // toDoEl.style.textDecoration = "none";
  });  

  // inputCheckBox.addEventListener("click", function () {
  //   // toDoEl.style.textDecoration = "line-through";
  //   toDoEl.style.textDecoration = "";
  // });

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
