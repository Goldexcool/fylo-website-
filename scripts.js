var btn = document.getElementById("btn");
var error = document.querySelector(".errormess")


btn.addEventListener("click", function (e) {
    e.preventDefault()
    var valid = document.getElementById("validemail").value

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valid)) {
    error.innerHTML = "Sign up Sucessful"
    error.classList.add("error")
    return true;
  } else {
    error.innerHTML = "Please enter a valid email"
    error.classList.add("error")
    return false;
  }
});
