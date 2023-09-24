document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const respuesta = document.getElementById("respuesta");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        respuesta.innerHTML = "Formulario enviado correctamente.";
        form.reset();
    });
});