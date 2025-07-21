// alert("テスト");

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('js-toggle-sort');
    const sortOptions = document.getElementById('js-sort-options');

    toggleBtn.addEventListener('click', function () {
      sortOptions.classList.toggle('open');
      toggleBtn.classList.toggle('active');
    });
  });

  