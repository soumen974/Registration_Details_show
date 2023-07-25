function validateForm() {
    // Remove previous error messages
    clearErrors();

    // Get the values of the input fields
    const name = document.getElementById("name").value;
    const regDno = document.getElementById("regDno").value;
    const mailId = document.getElementById("mailId").value;
    const mobile = document.getElementById("mobile").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Mobile number validation regular expression
    const mobileRegex = /^\d{10}$/;

    // Validate name
    if (!name) {
        showError("name", "Name is required");
        return false;
    }

    // Validate registration number
    if (!regDno) {
        showError("regDno", "Registration number is required");
        return false;
    }

    // Validate email
    if (!mailId) {
        showError("mailId", "Email is required");
        return false;
    } else if (!emailRegex.test(mailId)) {
        showError("mailId", "Invalid Email");
        return false;
    }

    // Validate mobile number
    if (!mobile) {
        showError("mobile", "Mobile number is required");
        return false;
    } else if (!mobileRegex.test(mobile)) {
        showError("mobile", "Invalid Mobile number");
        return false;
    }

    // Display the output on the web page
    displayOutput(name, regDno, mailId, mobile);

    // Hide the form
    const form = document.getElementById("myForm");
    form.style.display = "none";
    

    return false; // Prevent form submission to keep the displayed details visible
}

function showError(fieldId, errorMessage) {
    // Display the error message for the specified field
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = errorMessage;
    document.getElementById(fieldId).insertAdjacentElement("afterend", errorElement);
}

function clearErrors() {
    // Clear all error messages
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => element.remove());
}

function displayOutput(name, regDno, mailId, mobile) {
    // Create a message with the user's input
    const message = `Hello, ${name}!\n Your Registration no ${regDno}\n Your Mail id ${mailId}\n your mobile no ${mobile}.`;

    // Get the output element
    const outputElement = document.getElementById("output");

    // Set the inner text of the output element to the message
    outputElement.innerText = message;
}
