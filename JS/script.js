// ========================
//  LIVE TIME DISPLAY
// ========================
const timeEl = document.getElementById("time");

function updateTime() {
  if (timeEl) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    timeEl.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

updateTime();
setInterval(updateTime, 1000);

// ========================
//  FOOTER YEAR AUTO-UPDATE
// ========================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ========================
//  CONTACT FORM VALIDATION
// ========================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (!form) return; // If not on contact page, stop here

  // Helper functions
  function showError(input, message) {
    const errorSpan = document.getElementById(`${input.id}Error`);
    if (errorSpan) errorSpan.textContent = message;
    input.classList.add("input-error");
  }

  function clearError(input) {
    const errorSpan = document.getElementById(`${input.id}Error`);
    if (errorSpan) errorSpan.textContent = "";
    input.classList.remove("input-error");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let valid = true;
    formStatus.textContent = "";

    // Full Name
    if (fullName.value.trim() === "") {
      showError(fullName, "Full name is required.");
      valid = false;
    } else {
      clearError(fullName);
    }

    // Email
    if (email.value.trim() === "") {
      showError(email, "Email is required.");
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, "Enter a valid email (e.g. name@example.com).");
      valid = false;
    } else {
      clearError(email);
    }

    // Subject
    if (subject.value.trim() === "") {
      showError(subject, "Subject is required.");
      valid = false;
    } else {
      clearError(subject);
    }

    // Message
    if (message.value.trim().length < 10) {
      showError(message, "Message must be at least 10 characters long.");
      valid = false;
    } else {
      clearError(message);
    }

    if (valid) {
      formStatus.textContent = "✅ Message sent successfully!";
      formStatus.style.color = "green";
      form.reset();
    } else {
      formStatus.textContent = "❌ Please fix the errors and try again.";
      formStatus.style.color = "red";
    }
  });
});