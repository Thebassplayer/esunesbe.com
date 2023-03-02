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

const contacto = document.querySelector("#contacto");

const button1 = document.querySelector("#btn1");

button1.addEventListener("mouseover", function () {
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    button1.style.left = `${width}px`;
    button1.style.top = `${height}px`;
    });

button1.addEventListener("click", function () {
    alert("Me debes un huesito 🦴");
    });

button1.addEventListener("mouseover", function () {
    button1.innerText = "🦴🦴🦴🦴";
    });

button1.addEventListener("mouseout", function () {
    button1.innerText = "Click Aqui!";
    });

