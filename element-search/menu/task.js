// Получаем все элементы меню
const menuLinks = document.querySelectorAll('.menu__link');

// Перебираем каждый элемент меню
menuLinks.forEach(link => {
  // Добавляем обработчик клика на каждый элемент меню
  link.addEventListener('click', event => {
    // Отменяем переход по ссылке
    event.preventDefault();

    // Получаем меню рядом со ссылкой
    const submenu = link.nextElementSibling;

    // Если меню есть
    if (submenu && submenu.classList.contains('menu_sub')) {
      // Скрываем все открытые меню, кроме текущего
      const activeSubmenus = document.querySelectorAll('.menu_sub.menu_active');
      activeSubmenus.forEach(activeSubmenu => {
        if (activeSubmenu !== submenu) {
          activeSubmenu.classList.remove('menu_active');
        }
      });

      // Переключаем класс у текущего меню
      submenu.classList.toggle('menu_active');
    } else {
      // Если меню нет, переходим по ссылке
      window.location.href = link.href;
    }
  });
});
