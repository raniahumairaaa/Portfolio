// 1. Mobile navigation menu
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

// Close the mobile menu after selecting a link
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show");
  });
});

// 2. Project category filter
const filterButtons = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");
    const category = button.getAttribute("data-filter");

    projects.forEach(function (project) {
      if (category === "all" || project.getAttribute("data-category") === category) {
        project.hidden = false;
      } else {
        project.hidden = true;
      }
    });
  });
});

// 3. Contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all the fields.";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
  } else {
    formMessage.textContent = "Your form is complete! (Demo only - no message was sent.)";
    contactForm.reset();
  }
});

// 4. Back to top button
const topButton = document.getElementById("topButton");

topButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 5. Automatically update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();
