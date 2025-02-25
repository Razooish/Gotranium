// Handle form submission
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const feedback = document.getElementById("feedback").value;

    // Validate inputs
    if (!name || !email || !subject || !feedback) {
      alert("Please fill out all fields.");
      return;
    }

    // Use EmailJS to send the form data
    emailjs
      .send("service_ex2ww8x", "template_9u6kjpr", {
        name: name,
        email: email,
        subject: subject,
        feedback: feedback,
      })
      .then(
        function (response) {
          alert("Feedback sent successfully!");
          document.getElementById("feedbackForm").reset();
        },
        function (error) {
          alert("Failed to send feedback. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  });