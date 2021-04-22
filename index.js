/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(t) {
  let time = t.split(":");

  if (parseInt(time[0]) < 12) {
    return "Good Morning"
  }
    

  if (parseInt(time[0]) > 12) {
    if (parseInt(time[0]) < 17) {
      return "Good Afternoon"
    }
      
  }
    
 if (parseInt(time[0]) > 17) {
  return "Good Evening"
 }
  
}

function displayMessage(s) {
  let text = document.getElementById("greeting")
  text.innerText = s
}