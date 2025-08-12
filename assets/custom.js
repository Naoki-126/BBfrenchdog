// alert("テスト");

/* FAQページ アコーディオン
=========================== */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#js-faq .accordion-a').forEach(content => {
    content.style.maxHeight = '0px';
    content.style.paddingTop = '0';
    content.style.paddingBottom = '0';
  });

  document.querySelectorAll('#js-faq .accordion-q').forEach(trigger => {
    const content = trigger.nextElementSibling;

    trigger.addEventListener('click', function () {
      const isActive = trigger.classList.contains('active');

      if (isActive) {
        trigger.classList.remove('active');
        content.style.maxHeight = '0px';
        content.style.paddingTop = '0';
        content.style.paddingBottom = '0';
      } else {
        trigger.classList.add('active');
        content.style.paddingTop = '14px';
        content.style.paddingBottom = '14px';
        content.style.maxHeight = (content.scrollHeight + 30) + 'px';
      }
    });
  });
});

