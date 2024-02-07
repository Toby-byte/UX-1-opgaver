document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const form = document.querySelector('form');

    // email must have one or more lowercase, uppercase or number followed by 
    // a @ then one or more lower, upper or number followed by a . then 
    // one or more lower or uppercase letters 
    const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+/;
    const minLength = 10;  // Minimum length for the email address

    // Validation on form submission
    form.addEventListener('submit', function(event) {
        let errorMessage = '';

        // Check if the email matches the regex pattern
        if (!emailRegex.test(emailInput.value)) {
            errorMessage += 'Please enter a valid email address.\n';
        }

        // Check if the email length is sufficient
        if (emailInput.value.length < minLength) {
            errorMessage += `Email should be at least ${minLength} characters long.\n`;
        }

        // If there are any error messages, show them in an alert and prevent form submission
        if (errorMessage.length > 0) {
            event.preventDefault();  // Stop form submission
            alert(errorMessage);
        }
    });
});