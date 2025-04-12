const loginform = document.getElementById("login-form");
const signupform = document.getElementById("signup-form");
const formtitle = document.getElementById("form-title");
const loginlink = document.querySelector('.login-link');
const signuplink = document.querySelector('.signup-link');
const loginbtn = document.getElementById('login-submit');
const signbtn = document.getElementById('signup-submit');

loginlink.addEventListener("click", () => {
    loginform.classList.remove("hidden");
    signupform.classList.add("hidden");
    formtitle.textContent = "Log In"
});

signuplink.addEventListener("click", () => {
    loginform.classList.add("hidden");
    signupform.classList.remove("hidden");
    formtitle.textContent = "Sign Up"
});

loginbtn.addEventListener("click", e=> {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;
    if (username && password) {
        localStorage.setItem("username", username)
        window.location.href = "index.html";
    } else {
        window.alert("Please enter all the necessary fields!")
    }
    return false;
});

signbtn.addEventListener("click", e=> {
    e.preventDefault();
    const username = document.getElementById("signup-username").value.trim();
    const password1 = document.getElementById("p1").value;
    const password2 = document.getElementById("p2").value;

    if (username && password1 && password2) {
        if (password1 !== password2) {
            window.alert("Passwords do not match");
        } else {
            localStorage.setItem("username", username);
            window.location.href = "index.html";
        }
    } else {
        window.alert("Please enter all the necessary fields!")
    }
    return false;
});