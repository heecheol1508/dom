const dropdown = document.querySelector('.dropdown');
const toggleButton = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const nextButton = document.querySelector('.next-button');

// 메뉴 max-height: 0
// 메뉴 .show -> 토글
toggleButton.addEventListener('click', function () {
  menu.classList.toggle('show');
})

// blur event <- focus가 해제될 때
toggleButton.addEventListener('blur', function () {
  menu.classList.remove('show');
})

options.forEach(function (item) {
  item.addEventListener('click', selectOption)
})

function selectOption() {
  const label = this.textContent.trim()
  toggleButton.textContent = label
  toggleButton.classList.add('selected')
  nextButton.removeAttribute('disabled')
}