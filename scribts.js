document.getElementById('contactUs').addEventListener ('click', function() {
    alert("Thank you for your interest! We'll contact you soon.");
});
const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});