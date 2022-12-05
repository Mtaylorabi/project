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
  const lado1 = document.querySelector('.lado1').className;
  const lado2 = document.querySelector('.lado2').className;
  const lado3 = document.querySelector('.lado3').className;
  const queryString = `?lado1=${lado1}&lado2=${lado2}&lado3=${lado3}`;

  fetch(`https://636e8cdebb9cf402c804b9f3.mockapi.io/triangulo${queryString}`)
    .then(res => res.json())
    .then(data => {
      const responseElement = document.createElement('h');
      responseElement.innerText = data[0].tipo;
      responseElement.classList.add('response-text');
      if (responseElement.innerText === 'equilátero') {
        responseElement.style.color = 'orange';
      } else if (responseElement.innerText === 'isósceles') {
        responseElement.style.color = 'blue';
      } else if (responseElement.innerText === 'escaleno') {
        responseElement.style.color = 'lightgreen';
      }
      document.querySelector('#calcularTriangulo').insertAdjacentElement('beforeend', responseElement);
    });
}