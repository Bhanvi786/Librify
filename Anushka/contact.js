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
