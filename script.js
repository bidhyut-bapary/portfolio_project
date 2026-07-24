// যখন পেজ লোড হবে তখন preloader দেখাবে
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.querySelector(".main-content");

  setTimeout(() => {
    if (preloader) preloader.style.display = "none";
    if (mainContent) mainContent.style.display = "block";
  }, 1500);
});

const projects = [
  // Password Generator
  {
    title: "Password Generator",
    desc: "Secure password tool",
    link: "password-generator/index.html",
  },
  // Loan Management System
  {
    title: "Loan Management System",
    desc: "coming soon",
    link: "https://bidhyut-bapary.github.io/portfolio_project/",
  },
  // Responsive Calculator
  {
    title: "Responsive Calculator",
    desc: "Available Now",
    link: "https://bidhyut-bapary.github.io/responsive_calculator/",
  },
  // Bachelor House Monthly Management System
  {
    title: "Bachelor House Monthly Management System",
    desc: "Available Now",
    link: "bachelor_house_monthly_management_system/index.html",
  },
  // CV Builder
  {
    title: "CV Builder",
    desc: "coming soon",
    link: "https://bidhyut-bapary.github.io/cv_builder/",
  },
  // Billing System
  {
    title: "Billing System",
    desc: "coming soon",
    link: "https://bidhyut-bapary.github.io/billing_system/",
  },
  // Portfolio Website
  {
    title: "Portfolio Website",
    desc: "Available Now",
    link: "https://bidhyut-bapary.github.io/portfolio_website/",
  },
  // Photo Restoration
  {
    title: "Photo Restoration",
    desc: "coming soon",
    link: "https://bidhyut-bapary.github.io/photo_restoration/",
  },
  // Grocery Billing App
  {
    title: "Grocery Billing App",
    desc: "coming soon",
    link: "https://bidhyut-bapary.github.io/grocery_billing_app/",
  },
  // Dark/Light Mode UI
  {
    title: "Dark/Light Mode UI",
    desc: "coming soon",
    link: "https://bidhyut-bapary.github.io/dark_light_mode_ui/",
  },
  // Git Workflow Tool
  {
    title: "Git Workflow Tool",
    desc: "coming soon",
    link: "https://bidhyut-bapary.github.io/git_workflow_tool/",
  },
];

let perPage = 8;

function changePage(page) {
  let grid = document.getElementById("project-grid");
  grid.innerHTML = ""; // আগের কার্ড মুছে ফেলবে

  let start = (page - 1) * perPage;
  let end = start + perPage;
  let pageProjects = projects.slice(start, end);

  pageProjects.forEach((p) => {
    let card = document.createElement("div");
    card.className = "card";

    const badgeText = p.link === "https://bidhyut-bapary.github.io/portfolio_project/" ? "Coming Soon" : "Available";
    const iconClass = p.title.toLowerCase().includes("calculator")
      ? "fa-solid fa-calculator"
      : p.title.toLowerCase().includes("password")
      ? "fa-solid fa-lock"
      : p.title.toLowerCase().includes("management")
      ? "fa-solid fa-chart-line"
      : p.title.toLowerCase().includes("portfolio")
      ? "fa-solid fa-globe"
      : p.title.toLowerCase().includes("billing")
      ? "fa-solid fa-receipt"
      : p.title.toLowerCase().includes("photo")
      ? "fa-solid fa-image"
      : p.title.toLowerCase().includes("grocery")
      ? "fa-solid fa-cart-shopping"
      : "fa-solid fa-box-open";

    card.innerHTML = `
            <div class="card-top">
              <div class="card-icon"><i class="${iconClass}"></i></div>
              <span class="card-badge">${badgeText}</span>
            </div>
            <div class="card-body">
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
            </div>
            <a href="${p.link}" class="btn" target="_blank">View Project</a>
        `;
    grid.appendChild(card);
  });
}

// প্রথম পেজ লোড হবে
changePage(1);
function setupPagination() {
  let totalPages = Math.ceil(projects.length / perPage);
  let paginationDiv = document.querySelector(".pagination");
  paginationDiv.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = () => changePage(i);
    paginationDiv.appendChild(btn);
  }
}

setupPagination();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    event.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
  });
});
