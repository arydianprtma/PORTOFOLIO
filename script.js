document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init();

  // See More button functionality
  const seeMoreBtn = document.getElementById("see-more-btn");
  const hiddenProjects = document.querySelectorAll(".hidden-projects");

  if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", function () {
      hiddenProjects.forEach((project) => {
        project.style.display = "block";
      });
      this.style.display = "none";
    });
  }

  // Contact form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Ambil data dari formulir
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      // Tampilkan SweetAlert2
      Swal.fire({
        title: 'Thank you!',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          // Buat URL WhatsApp
          var whatsappUrl = `https://wa.me/6282214003125?text=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
          )}`;

          // Redirect ke URL WhatsApp
          window.open(whatsappUrl, "_blank");

          // Reset formulir
          contactForm.reset();
        }
      });
    });
  }

  // Initialize Feather icons
  feather.replace();
});

// Skill bar animation
function animateSkillBars() {
  const skillLevels = document.querySelectorAll(".skill-level");
  skillLevels.forEach((level) => {
    const width = level.style.width;
    level.style.width = "0%";
    setTimeout(() => {
      level.style.width = width;
    }, 200);
  });
}

// Call the function when the skills section is in view
const skillsSection = document.querySelector(".skills");
if (skillsSection) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateSkillBars();
      observer.unobserve(skillsSection);
    }
  });
  observer.observe(skillsSection);
}
