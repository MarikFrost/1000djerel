<!-- Підключення EmailJS SDK -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
    // Ініціалізація EmailJS
    emailjs.init("YOUR_PUBLIC_KEY");

    // Додаємо обробник на форму
    document.getElementById("helpRequestForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Запобігає стандартному відправленню форми
        
        // Збираємо дані форми
        const name = event.target.name.value;
        const email = event.target.email.value;
        const helpRequest = event.target["help-request"].value;

        // Відправляємо дані за допомогою EmailJS
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            name: name,
            email: email,
            help_request: helpRequest
        }).then(
            function(response) {
                alert("Заявка успішно надіслана!");
                event.target.reset(); // Очищуємо форму після надсилання
            },
            function(error) {
                alert("Сталася помилка при відправці форми, спробуйте знову.");
            }
        );
    });
</script>
