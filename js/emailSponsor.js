document.getElementById("sponsorForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        brandCategory: document.getElementById("brandCategory").value.trim(),
        brandName: document.getElementById("brandName").value.trim(),
        emailAddress: document.getElementById("emailAddress").value.trim(),
        contactNumber: document.getElementById("contactNumber").value.trim(),
        message: document.getElementById("message").value.trim(),
    };

    // Validate inputs
    if (!formData.brandCategory || !formData.brandName || !formData.emailAddress || !formData.contactNumber || !formData.message) {
        alert("Please fill out all fields.");
        return;
    }

    // Use EmailJS to send the form data
    emailjs.send("service_49rbaru", "template_dbd0nnw", formData)
        .then(function (response) {
            alert("Sponsorship inquiry sent successfully!");
            document.getElementById("sponsorForm").reset();
        }, function (error) {
            alert("Failed to send sponsorship inquiry. Please try again.");
            console.error("EmailJS error:", error);
        });
});

