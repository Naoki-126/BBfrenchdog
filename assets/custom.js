// alert("テスト");

/* FAQページ アコーディオン
=========================== */
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

/* 商品ページ アコーディオン
=========================== */
document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('.js-accordion-trigger');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', function () {
        const isOpen = this.classList.contains('is-open');

        // 全て閉じる
        document.querySelectorAll('.js-accordion-trigger').forEach(el => el.classList.remove('is-open'));
        document.querySelectorAll('.js-accordion-content').forEach(el => el.style.display = 'none');

        // 自分だけ開く
        if (!isOpen) {
          this.classList.add('is-open');
          const content = this.nextElementSibling;
          if (content && content.classList.contains('js-accordion-content')) {
            content.style.display = 'block';
          }
        }
      });
    });
  });
