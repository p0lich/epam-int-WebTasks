const rmCheck = document.getElementById("rememberCheck"),
    loginInput = document.getElementById("loginId");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  loginInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  loginInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && loginInput.value !== "") {
    localStorage.username = loginInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}