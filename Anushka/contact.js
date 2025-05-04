const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    status.textContent = "Sending...";
    status.style.color = "#555";

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.textContent = "Thank you! Your message has been sent.";
            status.style.color = "green";
            form.reset();
        } else {
            const data = await response.json();
            status.textContent = data.errors ? data.errors[0].message : "Something went wrong.";
            status.style.color = "red";
        }
    } catch (error) {
        status.textContent = "There was an error sending your message.";
        status.style.color = "red";
    }
});