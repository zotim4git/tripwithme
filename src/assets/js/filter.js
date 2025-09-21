document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".cd-gallery .mix");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // ⭐ 여기가 핵심!

      // 버튼 active 상태 바꾸기
      buttons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filter = this.dataset.filter;

      items.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".category-toggle");
  const categoryNav = document.querySelector(".category-nav");

  if (toggleBtn && categoryNav) {
    toggleBtn.addEventListener("click", () => {
      categoryNav.classList.toggle("active");
    });
  }
});