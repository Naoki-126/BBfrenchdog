document.addEventListener("DOMContentLoaded", function () {
  const MAX_ITEMS = 4;
  const storageKey = "recentlyViewedProducts";
  const container = document.getElementById("recently-viewed-list");

  if (!container) return;

  let viewed = JSON.parse(localStorage.getItem(storageKey) || "[]");
  viewed = [...new Set(viewed)].slice(0, MAX_ITEMS);

  if (viewed.length > 0) {
    fetch(`/products.json`)
      .then((res) => res.json())
      .then((data) => {
        const products = data.products.filter((p) => viewed.includes(p.handle));

        products.forEach((product) => {
          const imageSrc = product.images[0]?.src || "";
          const resizedImage = imageSrc.replace(/(\.\w{3,4})$/, '_400x$1');

          const li = document.createElement("li");
          li.className = "recently-viewed__item";
          li.innerHTML = `
            <a href="/products/${product.handle}">
              <img src="${resizedImage}" alt="${product.title}" />
              <p class="title">${product.title}</p>
            </a>
          `;
          container.appendChild(li);
        });
      });
  }
});
