"use strict";

window.addEventListener('DOMContentLoaded',()=>{
	// Работаем с табами
// Объявляем переменные
const tabs = document.querySelectorAll('.tabheader__item');
const tabsContent = document.querySelectorAll('.tabcontent');
const tabsParrent = document.querySelector('.tabheader__items');

//Пишем функцю скрытия табов
function mainHideTabContent () {
	for(let i = 0; i < tabsContent.length; i++){
		tabsContent[i].style.display = 'none';
	}
	for(let i = 0; i < tabs.length; i++){
		tabs[i].classList.remove('tabheader__item_active');
	}	
}
 mainHideTabContent();// Выводим функцию табов скрытия

 //Пишем функцию показа таба с нужным классом активности
 function showTabcontent(i = 0) {
	tabsContent[i].style.display = 'block';
	tabs[i].classList.add('tabheader__item_active');
}
showTabcontent(); //Выводим фукнцию пока нужного таба с классом активности

// Функция события клика по пунктам меню табов
function tabsEvent (nameTabs, nameClass) {// В параметры будем ложить переменную и класс
	nameTabs.addEventListener('click', (event) => {
		const target = event.target;// Укорачиваем событие для удобства вывода короткого
		if(target && target.classList.contains(nameClass)){//Проверяем наличие класса там где клик был
			tabs.forEach((item,i) => {// В параметры положим элемент,и i это номер элемента 
				if(target == item){// Проверяем 
					mainHideTabContent();//Выводим функцию скрытия табов
					showTabcontent(i);// Выводим табы с нужным нам индексом i
				}
			});
		}
	});
}
tabsEvent(tabsParrent,'tabheader__item');// Выводим нашу функцию с параметрами
// tabsParrent - это переменная
//tabheader__item - это класс нашего item по которому был клик

/************************************* */

/*function hideTabcontent() {
	tabsContent.forEach(item => {
		item.style.display = 'none';
	});
	tabs.forEach(item => {
		item.classList.remove('tabheader__item_active');
	});
}

function showTabcontent(i = 0) {
	tabsContent[i].style.display = 'block';
	tabs[i].classList.add('tabheader__item_active');
}
hideTabcontent();
showTabcontent();

tabsParrent.addEventListener('click', (event) => {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')){
			tabs.forEach((item,i) => {
				if(target == item){
					hideTabcontent();
					showTabcontent(i);
				}
			});
		}
	});*/
});

// Работа с тайм аутоми
/*const dateMainData = new Date(2020, 5, 1, 20);
const timess = setInterval((text, dateMain) => {
	console.log(text,dateMain);
	clearInterval(timess);
}, 2000, "Привет мир", dateMainData);
//timess("");

const timess2 = setTimeout(nameFunc, 2000);

function nameFunc() {
	console.log('Текст');
}
*/

