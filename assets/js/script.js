//put input box here
//what happens to the data after text is inputted?

//I need to display it on screen
//how do I display it on screen

// The idea is to input a task item and then have it added to the list of items on screen

const inputBox = document.getElementById("inputBox");

const submitBtn = document.getElementById("submitBtn");

const taskItems = document.getElementById("taskItems");

// function display(){
//     inputBox.value
// }

// A user can create a todo item by entering text into an input box and pressing a button
function myFunction() {
  // taskItems.innerHTML = `<h3>${inputBox.value}</h3>`

  //Ok, now I have it return whatever I write in the task search box, now, how do I stack another task item on top of it?

  //A list of created todo items are shown on the screen

  //store it in local storage
  //create an object out of the list items and whenever submit button is clicked it adds it to that list, maybe try an empty array?
  // pushToArray()

  let emptyArr = [];
  let itemsPushed = emptyArr.push(inputBox.value);
  for(let i = 0; i < emptyArr.length; i++){
    
  }

  taskItems.innerHTML = `<h3>${itemsPushed}</h3>`

  console.log(emptyArr)
  console.log(itemsPushed)


}

function pushToArray() {
  let emptyArr = [];

  // console.log(myFunction())

  //if myFunction is triggerd then push inputBox.value into the array
  if (myFunction()) {
    emptyArr.push(inputBox.value);
  }
}
