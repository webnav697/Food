"use strict";
document.querySelector('.marg').addEventListener('click', function () {
	// document.querySelector('.marg').addEventListener('click', () => {
	this.style.color = "red";
	this.style.backgroundColor = "#000";
	setInterval(() => {
		this.style.color = "#000";
		this.style.backgroundColor = "#fff";
	}, 2000);
	clearInterval(setInterval);
});

const obj = {
	age: 5,
	work: 'Программист',
	sayNumber: function () {// 
		const say = () => {
			console.log(this.age);
			console.log(this.work);
		};
		say();// Вытаскиваем данные из конекста, 
		//так как стрелочной функции нет своего контекста,проблем не будет
	}
};
obj.sayNumber();

// Пример 2
const double = (a) => {// Полный пример
	return a * 2;
};
console.log(double(25));

const double2 = a => a * 2; // Короткий пример без скобок
console.log(double2(100));

const double3 = (a,b) => a * 2 + b; // Короткий пример с скобками так как 2 параметра
console.log(double3(100,300));

