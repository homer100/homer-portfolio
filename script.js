function renderSkills(targetId, skills) {
  const target = document.getElementById(targetId);
  if (!target) return;

  target.innerHTML = skills.map((skill) =>
    `<span class="skill-pill">${escapeHTML(skill.name)} <em>${escapeHTML(skill.level)}</em></span>`
  ).join("");
}

function renderProjects() {
  const target = document.getElementById("projects-grid");
  if (!target) return;

  if (projects.length === 0) {
    target.innerHTML = `
      <p class="projects-empty reveal">
        I’m still learning and will share my school or personal projects here when they’re ready.
      </p>`;
    return;
  }

  target.innerHTML = projects.map((project) => {
    const technologyList = project.technologies.map((technology) => `<span>${escapeHTML(technology)}</span>`).join("");
    const githubLink = project.github
      ? `<a href="${escapeAttribute(project.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>`
      : `<a href="#contact" aria-label="Add a GitHub link for ${escapeAttribute(project.name)}">GitHub link soon</a>`;
    const demoLink = project.demo
      ? `<a href="${escapeAttribute(project.demo)}" target="_blank" rel="noreferrer">Live demo ↗</a>`
      : `<a href="#contact" aria-label="Add a demo link for ${escapeAttribute(project.name)}">Demo link soon</a>`;

    return `
      <article class="project-card reveal">
        <img class="project-image" src="${escapeAttribute(project.image)}" alt="${escapeAttribute(project.imageAlt)}">
        <div class="project-content">
          <span class="project-type">${escapeHTML(project.type)}</span>
          <h3>${escapeHTML(project.name)}</h3>
          <p>${escapeHTML(project.description)}</p>
          <div class="project-tech" aria-label="Technologies">${technologyList}</div>
          <div class="project-links">${githubLink}${demoLink}</div>
        </div>
      </article>`;
  }).join("");
}

function renderCertificates() {
  const target = document.getElementById("certificates-grid");
  if (!target) return;

  target.innerHTML = certificates.map((certificate) => {
    const viewLink = certificate.pdf
      ? `<a class="certificate-link" href="${escapeAttribute(certificate.pdf)}" target="_blank" rel="noreferrer">View certificate PDF ↗</a>`
      : certificate.link
        ? `<a class="certificate-link" href="${escapeAttribute(certificate.link)}" target="_blank" rel="noreferrer">View certificate ↗</a>`
        : "";
    return `
      <article class="certificate-card reveal">
        <img class="certificate-image" src="${escapeAttribute(certificate.image)}" alt="${escapeAttribute(certificate.alt)}">
        <div class="certificate-info">
          <h3>${escapeHTML(certificate.title)}</h3>
          <p>${escapeHTML(certificate.organization)}</p>
          <p class="certificate-date">${escapeHTML(certificate.date)}</p>
          ${viewLink}
        </div>
      </article>`;
  }).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function escapeAttribute(value) {
  return escapeHTML(value);
}

document.querySelector("[data-profile-picture]")?.setAttribute("src", profileImage);
renderSkills("programming-skills", programmingSkills);
renderSkills("tool-skills", toolSkills);
renderProjects();
renderCertificates();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  navLinks?.classList.toggle("is-open", !isOpen);
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation menu");
  });
});

const themeToggle = document.querySelector(".theme-toggle");
themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  themeToggle.setAttribute("aria-label", nextTheme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  try {
    localStorage.setItem("homer-theme", nextTheme);
  } catch {
    // Theme switching remains available for this visit if storage is unavailable.
  }
});

const contactForm = document.getElementById("contact-form");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const status = document.getElementById("form-status");

  if (!name || !email || !message) {
    status.textContent = "Please fill in your name, email, and message.";
    return;
  }

  // Replace this address with your email, or connect a form service for backend delivery.
  const recipient = "your.email@example.com";
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  status.textContent = "Your email app should open with the message ready to send.";
});

document.getElementById("current-year").textContent = String(new Date().getFullYear());

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
