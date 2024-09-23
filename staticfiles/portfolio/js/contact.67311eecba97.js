document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contactForm');
    const messageDiv = document.querySelector('#message');  // Asegúrate de que esta línea esté presente

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const csrftoken = csrfToken;  // Usar csrfToken directamente

        const xhr = new XMLHttpRequest();
        xhr.open('POST', submitContactUrl, true);  // Usar submitContactUrl
        xhr.setRequestHeader('X-CSRFToken', csrftoken);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Mostrar mensaje de éxito
                messageDiv.textContent = 'Mensaje enviado correctamente.';
                messageDiv.classList.remove('error');
                messageDiv.classList.add('success');
                messageDiv.style.display = 'block';  // Asegúrate de que se muestre el mensaje
                form.reset();
            } else {
                // Mostrar mensaje de error
                messageDiv.textContent = 'Hubo un error al enviar el mensaje.';
                messageDiv.classList.remove('success');
                messageDiv.classList.add('error');
                messageDiv.style.display = 'block';  // Asegúrate de que se muestre el mensaje
            }
        };
        xhr.onerror = () => {
            messageDiv.textContent = 'Error en la solicitud.';
            messageDiv.classList.remove('success');
            messageDiv.classList.add('error');
            messageDiv.style.display = 'block';  // Asegúrate de que se muestre el mensaje
        };
        xhr.send(formData);
    });
});
