//your JS code here. If required.
const input = document.querySelector(".input")
const button = document.getElementById('search')
console.log(input)
console.log(button)
button.addEventListener('click', ()=>{
	input.classList.add('active')
	input.focus()
})