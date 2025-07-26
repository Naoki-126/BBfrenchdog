// alert("テスト");

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('js-toggle-sort');
    const sortOptions = document.getElementById('js-sort-options');

    toggleBtn.addEventListener('click', function () {
      sortOptions.classList.toggle('open');
      toggleBtn.classList.toggle('active');
    });
  });

document.getElementById('js-faq').addEventListener('click', function (e) {
  const clicked = e.target;

  if (clicked.classList.contains('accordion-q')) {
    const answer = clicked.nextElementSibling;

    // 回答表示切り替え
    answer.classList.toggle('active');

    // 矢印反転用クラス切り替え
    clicked.classList.toggle('active');
  }
});
