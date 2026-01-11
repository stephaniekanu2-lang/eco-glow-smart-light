const form = document.getElementById("signupForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  errorMsg.textContent = "";

  if (name === "") {
    errorMsg.textContent = "Name is required";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    errorMsg.textContent = "Please enter a valid email address";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters";
    return;
  }

  alert("Sign up successful ✅");
  form.submit(); 
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on load
