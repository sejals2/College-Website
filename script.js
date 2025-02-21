document.addEventListener("DOMContentLoaded", function() {
    // Function to validate form inputs
    function validateForm() {
        var name = document.forms["registrationForm"]["name"].value;
        var email= document.forms["registrationForm"]["email"].value;
        var contact = document.forms["registrationForm"]["contact"].value;
        var message = document.forms["registrationForm"]["message"].value;

        if (name == "" || email == "" || contact == "" || message == "") {
            alert("All fields must be filled out");
            return false;
        }
        return true;
    }

    // Adding event listener to form submission
    var form = document.getElementById("registrationForm");
    form.addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
