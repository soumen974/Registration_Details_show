function validateForm() {
    // Remove previous error messages and reset input field colors
    clearErrors();
    resetInputColors();

    // Get the values of the input fields
    const name = document.getElementById("name").value;
    const regDno = document.getElementById("regDno").value;
    const mailId = document.getElementById("mailId").value;
    const mobile = document.getElementById("mobile").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Mobile number validation regular expression
    const mobileRegex = /^\d{10}$/;

    const showBox = document.getElementById("output");
    showBox.style.display = "none";

    // Validate name
    if (!name) {
        showError("name", "Name is required");
        setInvalidInputColor("name");
        setSubmitButtonColor("red");
        return false;
    }

    // Validate registration number
    if (!regDno) {
        showError("regDno", "Registration number is required");
        setInvalidInputColor("regDno");
        setSubmitButtonColor("red");
        return false;
    }

    // Validate email
    if (!mailId) {
        showError("mailId", "Email is required");
        setInvalidInputColor("mailId");
        setSubmitButtonColor("red");
        return false;
    } else if (!emailRegex.test(mailId)) {
        showError("mailId", "Invalid Email");
        setInvalidInputColor("mailId");
        setSubmitButtonColor("red");
        return false;
    }

    // Validate mobile number
    if (!mobile) {
        showError("mobile", "Mobile number is required");
        setInvalidInputColor("mobile");
        setSubmitButtonColor("red");
        return false;
    } else if (!mobileRegex.test(mobile)) {
        showError("mobile", "Invalid Mobile number");
        setInvalidInputColor("mobile");
        setSubmitButtonColor("red");
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

function setInvalidInputColor(inputId) {
    // Set the input field's border color to red when invalid data is entered
    document.getElementById(inputId).style.backgroundColor = "red";
}

function resetInputColors() {
    // Reset input field border colors to default
    const inputs = document.querySelectorAll("input[type='text']");
    inputs.forEach(input => (input.style.borderColor = ""));
}

function setSubmitButtonColor(color) {
    // Set the submit button and button outside the form to the specified color
    const submitButton = document.getElementById("buttonSubmit");
    const outsideButton = document.getElementById("myButton"); // Replace "myButton" with the actual button ID outside the form
    submitButton.style.backgroundColor = color;
    outsideButton.style.backgroundColor = color;
}

function displayOutput(name, regDno, mailId, mobile) {
    // Create a message with the user's input
    const message = `Hello, ${name}!\n Your Registration no ${regDno}\n Your Mail id ${mailId}\n Your Mobile no ${mobile}.`;

    // Get the output element
    const outputElement = document.getElementById("output");

    // Set the inner text of the output element to the message
    outputElement.innerText = message;
}
