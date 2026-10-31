const hamster = {};

// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Product Category Filter Logic
function filterProducts(category) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("bg-peach-400", "text-white", "shadow-md");
    btn.classList.add("bg-white", "text-choco-700");
  });

  event.target.classList.remove("bg-white", "text-choco-700");
  event.target.classList.add("bg-peach-400", "text-white", "shadow-md");

  const items = document.querySelectorAll(".product-item");
  items.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// Cage Size Calculator Logic
function calculateCageSize() {
  const length = parseFloat(document.getElementById("calcLength").value) || 0;
  const width = parseFloat(document.getElementById("calcWidth").value) || 0;
  const type = document.getElementById("calcType").value;

  const area = length * width;
  const areaText = document.getElementById("areaText");
  const statusText = document.getElementById("statusText");
  const resultIcon = document.getElementById("resultIcon");
  const recommendationBadge = document.getElementById("recommendationBadge");

  areaText.textContent = `${area} cm²`;

  // Minimum area threshold: Syrian >= 4000 cm², Dwarf >= 3000 cm²
  const minRequired = type === "syrian" ? 4000 : 3000;

  if (area >= minRequired) {
    statusText.textContent = "Kandang Sangat Layak & Ideal! ✨";
    statusText.className = "font-extrabold text-green-600 text-base sm:text-lg";
    resultIcon.className =
      "w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center shrink-0";
    resultIcon.innerHTML = `<i data-lucide="check-circle-2" class="w-6 h-6"></i>`;
    recommendationBadge.textContent = `Memenuhi syarat (min. ${minRequired} cm²)`;
  } else {
    statusText.textContent = "Kandang Terlalu Sempit! ⚠️";
    statusText.className = "font-extrabold text-red-500 text-base sm:text-lg";
    resultIcon.className =
      "w-12 h-12 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center shrink-0";
    resultIcon.innerHTML = `<i data-lucide="alert-circle" class="w-6 h-6"></i>`;
    recommendationBadge.textContent = `Disarankan min. ${minRequired} cm² untuk ${type === "syrian" ? "Syrian" : "Dwarf"}`;
  }
  lucide.createIcons();
}

// Accordion Toggle Logic
function toggleAccordion(index) {
  const content = document.getElementById(`accContent-${index}`);
  const icon = document.getElementById(`accIcon-${index}`);

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.style.transform = "rotate(180deg)";
  } else {
    content.classList.add("hidden");
    icon.style.transform = "rotate(0deg)";
  }
}

// Modal Functionality
function openModal(title, price, desc, imgSrc) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalPrice").textContent = price;
  document.getElementById("modalDescription").textContent = desc;
  document.getElementById("modalImage").src = imgSrc;

  const waMessage = encodeURIComponent(
    `Halo Rumah Hamster, saya tertarik dengan "${title}" (${price}). Apakah stok tersedia?`,
  );
  document.getElementById("modalWaBtn").href =
    `https://wa.me/62895619569494?text=${waMessage}`;

  document.getElementById("productModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("productModal").classList.add("hidden");
}

// Close modal on outside click
window.onclick = function (event) {
  const modal = document.getElementById("productModal");
  if (event.target === modal) {
    closeModal();
  }
};
