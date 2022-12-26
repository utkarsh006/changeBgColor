const button = document.querySelector("button")
//target the body
const body = document.querySelector("body")

//create variable to store some colors in the form of an array
const color = ['red','yellow','green','pink','green','teal']


//change bgcolor to violet from white
body.style.backgroundColor = "violet"

//add events to change color when we click on button
button.addEventListener('click',changeBgColor)

//writing a function to change background color randomly
function changeBgColor()
{
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]

}
