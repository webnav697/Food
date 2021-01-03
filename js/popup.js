"use strict";
// popup окно
window.addEventListener('DOMContentLoaded',()=>{
	const modalTrigger = document.querySelectorAll('[data-modal]');// Достаём все кнопки по атрибуту date-modal
	const modal = document.querySelector('.modal');//Достаём весь блок с формой
	const modalCloseBtn = document.querySelector('[data-close]');// Достаём кнопку закрытия

	modalTrigger.forEach(btn =>{// Циклом достаём все кнопки
		btn.addEventListener('click', () => {// Вешаем обработчик
		modal.classList.add('show');// Добавляем класс 
		modal.classList.remove('hide');// Удаляем класс
		document.body.style.overflow = "hidden";// Убираем прокрутку во время попапа
		});
	});

	function closeModal() {
		modal.classList.remove('show');// Удаляем класс
		modal.classList.add('hide');// Добавляем класс
		document.body.style.overflow = "";
	}

	modalCloseBtn.addEventListener('click',closeModal);
	// Тут мы передаём а не вызываем функцию closeModal
	// Поэтому пишем без скобок функцию

	modal.addEventListener('click', (e) => {
		if(e.target === modal){// Если клик действительно был в поле мимо крестика
			closeModal();//Вызываем функцию закрытия
		}
	});

	document.addEventListener('keydown', (e) => {
		if(e.code === "Escape"  && modal.classList.contains("show")){// Если нажата кнопка Escape на клавиатуре
			closeModal();//Вызываем функцию закрытия
			}
		});
});