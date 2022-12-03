function api() {
  fetch('https://636e8cdebb9cf402c804b9f3.mockapi.io/triangulo')
    .then(res => res.json())
    .then(data => {
      // Create an element to hold the response data
      const responseElement = document.createElement('p');
      responseElement.innerText = data[0].tipo;
      responseElement.classList.add('response-text');

      // Append the element to the page
      document.body.appendChild(responseElement);
    });
}



    
