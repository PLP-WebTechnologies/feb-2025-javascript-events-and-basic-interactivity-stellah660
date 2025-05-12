// Event Handling: Change Text
document.getElementById("changeTextBtn").addEventListener("click", function() {
  const btn = document.getElementById("changeTextBtn");
  btn.textContent = "You clicked me!";
  btn.style.backgroundColor = "#4CAF50"; // Change button color
});

// Event Handling: Hover Effect
document.getElementById("hoverBtn").addEventListener("mouseover", function() {
  document.getElementById("hoverBtn").textContent = "Hovered!";
});

document.getElementById("hoverBtn").addEventListener("mouseout", function() {
  document.getElementById("hoverBtn").textContent = "Hover over me!";
});

// Keypress Detection
document.getElementById("keypressInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    alert("You pressed the Enter key!");
  }
});

// Double-Click Event
document.getElementById("doubleClickBox").addEventListener("dblclick", function() {
  alert("You double-clicked the box!");
});

// Interactive Elements: Change Color
document.getElementById("colorChangeBtn").addEventListener("click", function() {
  const colors = ["#ff6347", "#4682b4", "#32cd32", "#ff69b4", "#ffd700"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// Form Validation: Check Email and Password
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  // Email validation (basic format check)
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailPattern)) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  // Password validation
  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";
});
