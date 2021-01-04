"use strict";
// Классы для карточек товара
class Products {
	constructor (src, alt, title, desc, price, parentSelector,...classes){
		this.src = src;
		this.alt = alt;
		this.title = title;
		this.desc = desc;
		this.price = price;
		this.classes = classes, // Работать как с массивами потом
		this.parent = document.querySelector(parentSelector);
		this.transfer = 27;
		this.chanceToUAH();//Метод конвертации
	}
	chanceToUAH(){// Метод конвертации Валюты
		this.price = this.price *	this.transfer; // Умножаем цену на данные по курсу
	}
	render(){
		const element = document.createElement('div');
		if (this.classes.length === 0){// Если класс не назначен
			this.element = "menu__item";// Сами добавим класс нужный
			element.classList.add(this.element);// Добавляем класс
		}else{
			this.classes.forEach(className => element.classList.add(className));
		}
		element.innerHTML = `
			<img src=${this.src} alt=${this.alt}>
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.desc}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
				<div class="menu__item-cost">Цена:</div>
				<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
			</div>
		`;
		this.parent.append(element);
	}
}

new Products(
	"img/tabs/vegy.jpg",
	"vegy",
	'Меню "Фитнес"',
	'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
	9,
	".menu .container "
//	"menu__item",//Проверял если класс не написать, сработает ли наша фича с классом по умолчанию, сработала
//	"test__class"
).render();

new Products(
	"img/tabs/elite.jpg",
	"elite",
	'Меню “Премиум”',
	'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и	качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
	14,
	".menu .container ",
	"menu__item"
).render();

new Products(
	"img/tabs/post.jpg",
	"post",
	'Меню "Постное"',
	'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
	12,
	".menu .container ",
	"menu__item"
).render();

//console.log(product1.prodInfo);
/************************************* */
/*class Rechtangle {// Описываем класс и свойства его
	constructor (width, height){
		this.width = width;
		this.height = height;
	}
	calcArea(){ // Metod класса
		return this.width * this.height;// Метод вычисляет площадь
	}
}

class Slider extends Rechtangle{
	constructor (width, height, opasity, backgroundColor) {
		super(width, height);	// (super -Всегда должен писаться первым)
		this.opasity = opasity;
		this.backgroundColor = backgroundColor;
	}
	shopMyProps(){
		console.log(`Ширина: ${this.width}, Высота: ${this.height}, Прозрачность: ${this.opasity}, Цвет фона: ${this.backgroundColor}`);
	}
}
const div = new Slider (250, 200, 0.5, 'red');//Пишем данные параметров
div.shopMyProps(); // Выводим метод
console.log(div.calcArea());// Метод также наследуется и будет отрабатывать

//const square = new Rechtangle (10,10);// Создаём екземпляр класса с данными
//console.log(square.calcArea());// Выводим класс с методом подсчёта площади*/