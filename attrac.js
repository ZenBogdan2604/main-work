//Pagination

document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content'); 
    const itemsPerPage = 1; 
    let currentPage = 0;
    const items = Array.from(content.getElementsByTagName('section')).slice(0); 

    async function getResponse(){
      const response = await fetch('https://672dfd95fd89797156449049.mockapi.io/Monument')
      const content = await response.json()
      console.log(content.splice(0, 10))
      let list = document.querySelector('.posts')
      createPageButtons();
      showPage();
      let key;
      for (key in content){
        content[key]
      }
    }
    
    getResponse()

  function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items.forEach((item, index) => {
      item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
    updateActiveButtonStates();
  }
  
  function createPageButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationContainer = document.createElement('div');
    const paginationDiv = document.body.appendChild(paginationContainer);
    paginationContainer.classList.add('pagination');
  
    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        showPage(currentPage);
        updateActiveButtonStates();
      });
  
        content.appendChild(paginationContainer);
        paginationDiv.appendChild(pageButton);
      }
  }
  
  function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll('.pagination button');
    pageButtons.forEach((button, index) => {
      if (index === currentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  
    createPageButtons();
    showPage(currentPage);
  });

document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('.content');
  const itemsPerPage = 1;
  let currentPage = 0;
  let items = Array.from(content.getElementsByTagName('section')).slice(0);
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');

  // Функция для отображения страницы с учетом поиска и сортировки
  function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Фильтрация элементов по поисковому запросу
    const filteredItems = items.filter(item => {
      const itemName = item.textContent.toLowerCase(); // Получаем текст элемента и переводим в нижний регистр
      const searchTerm = searchInput.value.toLowerCase(); // Получаем поисковый запрос и переводим в нижний регистр
      return itemName.includes(searchTerm); // Проверяем, содержит ли текст элемента поисковый запрос
    });
    

    // Сортировка элементов
    const sortedItems = sortItems(filteredItems);

    // Отображение элементов на странице
    sortedItems.forEach((item, index) => {
      item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });

    // Обновление пагинации
    updatePagination(sortedItems);
    updateActiveButtonStates();
  }

  // Функция для сортировки элементов
  function sortItems(itemsToSort) {
    const sortValue = sortSelect.value;
    switch (sortValue) {
      case 'name':
        return itemsToSort.sort((a, b) => a.textContent.localeCompare(b.textContent)); // Сортировка по названию (textContent)
      
      default:
        return itemsToSort;
    }
  }

  // Функция для обновления пагинации
  function updatePagination(items) {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = ''; // Очищаем контейнер пагинации

    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        showPage(currentPage);
      });
      paginationContainer.appendChild(pageButton);
    }
  }

  
  function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll('.pagination button');
    pageButtons.forEach((button, index) => {
      if (index === currentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  

  // Обработчики событий для поиска и сортировки
  searchInput.addEventListener('input', () => {
    currentPage = 0; // Сбрасываем текущую страницу при поиске
    showPage(currentPage);
  });

  sortSelect.addEventListener('change', () => {
    currentPage = 0; // Сбрасываем текущую страницу при сортировке
    showPage(currentPage);
  });

  // Инициализация пагинации
  showPage(currentPage);
});




  let menuBtn = document.querySelector('.header__menu-btn-burger');
  let menu = document.querySelector('.nav');
  let menuItem = document.querySelectorAll('.nav__link');
  
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })
  
  
  menuItem.forEach (function(menuItem) {
    menuItem.addEventListener('click',function(){
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
    })
  })
  
// Loader
  
const mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide')
})