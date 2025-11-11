const timeEl = document.getElementById("time");
function updateTime() {
  timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

// CONTACT FORM VALIDATION 
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const year = document.getElementById("year");

  // Automatically set current year in footer
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // If there's no contact form on the current page, stop here
  if (!form) return;

  // Helper functions for showing and clearing errors
  function showError(input, message) {
    const errorSpan = document.getElementById(${input.id}Error);
    if (errorSpan) errorSpan.textContent = message;
    input.setAttribute("aria-invalid", "true");
  }

  function clearError(input) {
    const errorSpan = document.getElementById(${input.id}Error);
    if (errorSpan) errorSpan.textContent = "";
    input.removeAttribute("aria-invalid");
  }

  // Email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    formStatus.textContent = "";
    let isValid = true;

    // Validate Full Name
    if (fullName.value.trim() === "") {
      showError(fullName, "Full name is required.");
      isValid = false;
    } else {
      clearError(fullName);
    }

    // Validate Email
    if (email.value.trim() === "") {
      showError(email, "Email is required.");
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, "Please enter a valid email (e.g., name@example.com).");
      isValid = false;
    } else {
      clearError(email);
    }

    // Validate Subject
    if (subject.value.trim() === "") {
      showError(subject, "Subject is required.");
      isValid = false;
    } else {
      clearError(subject);
    }

    // Validate Message
    if (message.value.trim() === "") {
      showError(message, "Message is required.");
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showError(message, "Message must be at least 10 characters long.");
      isValid = false;
    } else {
      clearError(message);
    }

    // If all valid, show success
    if (isValid) {
      formStatus.textContent = "✅ Thank you, Sixty! Your message has been sent successfully.";
      formStatus.style.color = "green";
      form.reset();
      formStatus.focus();
    } else {
      formStatus.textContent = "❌ Please fix the errors above and try again.";
      formStatus.style.color = "red";
    }
  });
});