document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();  // Zatrzymujemy domyślną akcję wysyłania formularza
    alert('Dziękujemy za kontakt! Wiadomość została wysłana.');
});
