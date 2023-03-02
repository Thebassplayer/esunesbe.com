// const myImg = document.createElement('img');
// myImg.src = '/Users/roylopez/Documents/Cursos/HTML/esunesbe.com/images/CabezaEsbe.png';

// myImg.style.width = "200px";
// document.body.append(myImg);
// myImg.style.transition = "all 2s";

// setInterval(() => {
//     const x = Math.floor(document.body.clientWidth * Math.random());
//     const y = Math.floor(document.body.clientHeight * Math.random());
//     myImg.style.transform = `translate(${x}px,${y}px)`;
// },2000)

window.addEventListener('scroll', function() {
	console.log('So bolud@?');
});

const form = document.querySelector('#signup_form');

const nombre = document.querySelector('#nombre');
const raza = document.querySelector('#raza');
const color = document.querySelector('#color');
const email = document.querySelector('#email');
const terms = document.querySelector('#terms');

form.addEventListener('submit', function(e) {
	alert('Submited the form');
	console.log('nombre', nombre.value);
	console.log('raza', raza.value);
	console.log('color', color.value);
	console.log('email', email.value);
	console.log('terms', terms.checked);
	e.preventDefault();
});

const formData = {};

// nombre.addEventListener('input', (e) => {
// 	console.log('nombre', e);
// 	formData['nombre'] = e.target.value;
// });

// terms.addEventListener('input', (e) => {
// 	console.log('terms', e);
// 	formData['terms'] = e.target.checked;
// });

for (let input of [ nombre, raza, color, email, terms ]) {
	input.addEventListener('input', ({ target }) => {
		const { name, type, value, checked } = target;
		formData[name] = type === 'checkbox' ? checked : value;
		console.log(formData);
	});
}
