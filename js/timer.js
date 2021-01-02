"use strict";
// Таймер обратного отсчёта
window.addEventListener('DOMContentLoaded',()=>{
	const deadline = '2021-01-29';// Дата конца акции
//const deadline2 = '2021-01-04';// Дата конца 2 акции

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date());// Получаем разницу дат
		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor((t / (1000 * 60 * 60 ) % 24));
		const minutes = Math.floor((t / 1000 / 60) % 60 );
		const seconds = Math.floor((t / (1000) % 60));
		return {//Возвращаем результаты и помещаем в свойства объекта
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	} 

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector); // Достаём селектор основного блока
		const days = timer.querySelector('#days');// Достаём селекторы куда положим потом данные
		const hours = timer.querySelector('#hours');// Достаём селекторы куда положим потом данные
		const minutes = timer.querySelector('#minutes');// Достаём селекторы куда положим потом данные
		const seconds = timer.querySelector('#seconds');// Достаём селекторы куда положим потом данные
		const timeInterval = setInterval(updateClock, 1000);

		updateClock(); // Запускаем чтобы не прыгали цифры при нажатии F5 в браузере

		function updateClock() {// Функция обновления данных полученных
			const t = getTimeRemaining(endtime);
			days.innerHTML = t.days; //Отправляем данные в вёрстку
			hours.innerHTML = t.hours; //Отправляем данные в вёрстку
			minutes.innerHTML = t.minutes; //Отправляем данные в вёрстку
			seconds.innerHTML = t.seconds; //Отправляем данные в вёрстку

			if(t.total <= 0){// Если время кончилось, отсанавливаем функцию
				clearInterval(timeInterval);
			}
		}
	}
	setClock('.timer', deadline);// Выводим нашу функцию
	//setClock('.timer2', deadline2);// Если 2,3 таймера выводим по такому принципу
});