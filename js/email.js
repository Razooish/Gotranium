function sendEmail(){
    let params={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        subject:document.getElementById('subject').value,
        feedback:document.getElementById('feedback').value,

    }
    emailjs.send("service_ex2ww8x","template_9u6kjpr",params).then(alert("Your email has been sent successfully!"))
}