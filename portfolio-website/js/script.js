document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Vun5rLC4XnADiDoGU"); // ✅ Replace with your EmailJS Public Key

    const form = document.getElementById("contact-form");

    if (!form) {
        console.error("Form not found. Check the form ID.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const templateParams = {
            from_name: name,
            to_email: email,
            message: message,
        };

        emailjs.send("service_xmfj3ot", "template_t1egqxa", templateParams) // ✅ Fixed IDs
            .then(response => {
                alert("Email sent successfully!");
                form.reset();
            })
            .catch(error => {
                alert("Failed to send email. Try again later.");
                console.error("EmailJS Error:", error);
            });
    });
});
