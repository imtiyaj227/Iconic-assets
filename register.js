const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(name === "" || email === "" || password === "" || confirmPassword === ""){
        alert("Please fill all fields.");
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match.");
        return;
    }

    alert("Registration Successful!");

    window.location.href = "login.html";

});