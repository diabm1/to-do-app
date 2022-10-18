//put input box here
//what happens to the data after text is inputted?

//I need to display it on screen
//how do I display it on screen

// The idea is to input a task item and then have it added to the list of items on screen

const inputBox = document.getElementById("inputBox")

console.log(inputBox.value)

const submitBtn = document.getElementById("submitBtn")

const taskItems = document.getElementById("taskItems")


// function display(){
//     inputBox.value
// }

function myFunction(){
    taskItems.innerHTML = inputBox.value
    // console.log(inputBox.value)
    // `<h3>I'm clicked!</h3>`
}


