(() => {
  // Insira o WhatsApp oficial da loja com código do país, DDD e número, somente dígitos.
  // Exemplo de formato: "5562999999999". Mantido vazio para não inventar contato.
  const WHATSAPP_NUMBER = "";
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }));
  }
  document.querySelectorAll("[data-wa]").forEach(link => {
    const message = link.getAttribute("data-wa") || "Olá! Gostaria de atendimento.";
    if (WHATSAPP_NUMBER) {
      link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "https://beacons.ai/statuscelulares";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.title = "Configure o WhatsApp oficial em script.js para ativar o atendimento direto.";
    }
  });
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");
  filterButtons.forEach(button => button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    const filter = button.dataset.filter;
    products.forEach(product => product.classList.toggle("hidden", filter !== "todos" && product.dataset.category !== filter));
  }));
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), {threshold: 0.12});
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add("is-visible"));
})();