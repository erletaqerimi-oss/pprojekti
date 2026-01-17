const form = document.getElementById("EQ-contactForm");
const formMessage = document.getElementById("EQ-formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("EQ-name").value.trim();
  const email = document.getElementById("EQ-email").value.trim();
  const subject = document.getElementById("EQ-subject").value.trim();
  const message = document.getElementById("EQ-message").value.trim();

  if (name === "" || email === "" || subject === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  if (!email.includes("@")) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  formMessage.style.color = "#00e6ff";
  formMessage.textContent = "Message sent successfully! We will contact you soon.";

  form.reset();
});

