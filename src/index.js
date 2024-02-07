var menuBtn = document.querySelector('.burger-menu');
var menu = document.querySelector('.menu');
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener('click', function () {
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('active');
});
