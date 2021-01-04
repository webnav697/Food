"use strict";
// модальное окно
window.addEventListener('DOMContentLoaded',()=>{
	const modalTrigger = document.querySelectorAll('[data-modal]'); // Достаём все кнопки по атрибуту date-modal
	const modal = document.querySelector('.modal'); //Достаём весь блок с формой
	const modalCloseBtn = document.querySelector('[data-close]'); // Достаём кнопку закрытия

	// Функция открытия модального окна
	function openModal() {
		modal.classList.add('show'); // Добавляем класс 
		modal.classList.remove('hide'); // Удаляем класс
		document.body.style.overflow = "hidden";// Убираем прокрутку во время попапа
		/*clearInterval(modalTimerId);*/
		// Очищаем чтобы если пользователь уже успел сам посомтреть модалку
		// И оно не раздражало пользователя лишний раз
	} 
	/*const modalTimerId = setTimeout(openModal,5000);*/
	// Откроем окно после назначенного времени,
	// Eсли нужен такой функционал расскомментировать const modalTimerId 
	// и также в функции openModal расскоментировать clearInterval(modalTimerId)

	
	// Далее Фукнция показывания модалки при долистывания до конца страницы
	// Если нужен такой функционал,расскоментировать весь блок нужно
	/*
function showModalByScroll() {
	if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
			openModal();// Показываем модалку
			window.removeEventListener('scroll', showModalByScroll);// УДАЛЯЮ СОБЫТИЕ ПОСЛЕ ИСПОЛНЕНИЯ 1 РАЗА
			}	
}
window.addEventListener ('scroll', showModalByScroll);
*/

	modalTrigger.forEach(btn => { // Циклом достаём все кнопки
		btn.addEventListener('click', openModal);// Вешаем функцию на клик
	});

	function closeModal() {
		modal.classList.remove('show'); // Удаляем класс
		modal.classList.add('hide'); // Добавляем класс
		document.body.style.overflow = "";
	}

	modalCloseBtn.addEventListener('click',closeModal);
	// Тут мы передаём а не вызываем функцию closeModal
	// Поэтому пишем без скобок функцию

	modal.addEventListener('click', (e) => {
		if(e.target === modal){ // Если клик действительно был в поле мимо крестика
			closeModal(); // Всё равно вызываем функцию закрытия
		}
	});

	document.addEventListener('keydown', (e) => {
		if(e.code === "Escape"  && modal.classList.contains("show")){// Если нажата кнопка Escape на клавиатуре
			closeModal();//Вызываем функцию закрытия
			}
		});
});