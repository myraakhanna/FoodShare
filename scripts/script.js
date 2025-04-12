const loginbtn = document.querySelector('.join-btn-2');

// if user name is found, we set it to the username
if (localStorage.username != null) {
    loginbtn.textContent = "Hi, " + localStorage.username;
}
