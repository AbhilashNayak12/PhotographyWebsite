// Select all gallery images
const images = document.querySelectorAll(".gallery-grid img");

// Create modal elements
const modal = document.createElement("div");
const modalImg = document.createElement("img");

// Modal styles
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.background = "rgba(0,0,0,0.9)";
modal.style.display = "none";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "2000";

modalImg.style.maxWidth = "90%";
modalImg.style.maxHeight = "90%";
modalImg.style.borderRadius = "10px";

// Append modal
modal.appendChild(modalImg);
document.body.appendChild(modal);

// Open modal on image click
images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// Close modal on outside click
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

// Form validation
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {
  // Prevent form submission first
  e.preventDefault();

  // Trim values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Basic validation
  if (name === "") {
    alert("Please enter your name");
    nameInput.focus();
    return;
  }

  if (email === "") {
    alert("Please enter your email");
    emailInput.focus();
    return;
  }

  // Email pattern check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    emailInput.focus();
    return;
  }

  if (message === "") {
    alert("Please enter your message");
    messageInput.focus();
    return;
  }

 
  alert("Opening email app...");
  form.submit();
});
