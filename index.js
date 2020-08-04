// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("p#text").textContent = "This is really cool!"
})

console.log( "this console fires when index.js loads - before DOMContentLoaded is triggered")