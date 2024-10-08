function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;

    if (name === "" || email === "" || age === "") {
        alert("All fields are required.");
        return false;
    } else {
        alert("Registration Successful!");
    }
}
