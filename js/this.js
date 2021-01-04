"use strict";
/*function showThis(a, b) {
	function sum() {
		return this.a + this.b;
	}
		//console.log(sum());
}
showThis(10,20);*/

/*function sayName(surname) {
	console.log(this.name + " "+ surname + " Работа: "+this.work + " Возраст: " + this.age);
}*/

function Animal(type, name, legs) {  
	this.name = name;
  this.type = type;
  this.legs = legs;  
  this.logInfo = function() {
    //console.log(this === myCat); // => true
    console.log('Наш ' + this.type + name + ' ' + ' имеет ' + this.legs + '  ноги');
  };
}
const myCat = new Animal('Кот ','Барсик', 4);  
// logs "Наш Кот Барсик имеет 4 ноги"
setTimeout(myCat.logInfo.bind(myCat), 1000);

const user = {
	name: "Jon",
	work: 'Программист',
	age: 43	
};
//sayName.call(user,'Чебан');//Устанавливаем контекст методом call
//sayName.apply(user,['Ceban']);//Тоже устанавливаем контекст методом apply

/*
function count(surname) {
	return this.name + surname;	
}
const double = count.bind("Cibis");// Наше контекст с помощью метода bind
console.log(double(" Cibis2"));// В параметры передаём наш num, который равен 10
// В итоге выведет 50*/
