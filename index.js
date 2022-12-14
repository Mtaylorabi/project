const inputElements = document.querySelectorAll('.lado1, .lado2, .lado3');
inputElements.forEach(el => el.addEventListener('input', checkInputs));
const button = document.querySelector('.button');

function checkInputs() {
  const lado1 = document.querySelector('.lado1').value;
  const lado2 = document.querySelector('.lado2').value;
  const lado3 = document.querySelector('.lado3').value;

  if (lado1 && lado2 && lado3) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', true);
  }
}

function api() {
  const existingResponseElements = document.querySelectorAll('.response-text');
  existingResponseElements.forEach(el => el.remove());
  const lado1 = document.querySelector('.lado1').value;
  const lado2 = document.querySelector('.lado2').value;
  const lado3 = document.querySelector('.lado3').value;
  fetch(`http://localhost:3000/triangulo/${lado1}/${lado2}/${lado3}`)
    .then(res => res.json())
    .then(data => {
      const responseElement = document.createElement('h');
      responseElement.innerText = data.tipo;
      responseElement.classList.add('response-text');
      if (responseElement.innerText === 'equilátero') {
        responseElement.style.color = '#FFA500';
      } else if (responseElement.innerText === 'isósceles') {
        responseElement.style.color = '#0000FF';
      } else if (responseElement.innerText === 'escaleno') {
        responseElement.style.color = '#90EE90';
      }
      document.querySelector('#calcularTriangulo').insertAdjacentElement('beforeend', responseElement);
    });
}