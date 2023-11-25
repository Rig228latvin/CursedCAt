function helloWorld() {
	console.log('Hello World!')
	let d = 1000
	div.innerText += '\n'
	while (d >= 0) {
		div.innerText += d + '\n'
		d -= 45
	}
	return 0
}
const button = document.getElementById('button')
const div = document.getElementById('div')
button.addEventListener('click', helloWorld)
