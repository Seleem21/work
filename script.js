// وظيفة إرسال النموذج
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.");
    } else {
        alert("يرجى ملء جميع الحقول.");
    }
});