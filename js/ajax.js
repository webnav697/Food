const inputRub = document.querySelector('#rub'),
			inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {// событие input, есть ещё событие chance
	const request = new XMLHttpRequest();//request - значит запрос, создаём новый объект

	request.open('GET', 'js/current.json');//Метод собирает данные для запроса
	// Могут быть такие параметры - GET или POST, url, async, login, pass
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	//setRequestHeader - передаём http Заголовки
	request.send(); // Отправляем запрос

	// событие readystatechange отслеживает статус readyState события в текущий момент
	// пример - if(request.readyState === 4 && request.status === 200) 4 - Все данные пришли
	// событие load - Запрос готов можно работать - if (request.status === 200 )
	request.addEventListener('load' , ()=>{
		if (request.status === 200 ) {//  200 - Запрос успешно завершился
			console.log(request.response);
			// data - тут мы переводим в объект JS, что бы потом работать с данными
			const data = JSON.parse(request.response);// parse - переводить в понятный формат
					inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); 
				//inputRub.value = (+inputRub.value * data.current.usd).toFixed(2);
		}else{
			inputUsd.value = 'Что то пошло не так';
			//alert('попробуйте повторить действия');
		}
	});

	// Свойства объекта XMLHttpRequest():
	// status - Ошибки коды типа 100, 200, 300, 400, 500
  // statusText - Текстовое описание ответа от сервеа типа (ок, noud faund  и прочее)
	// response - Ответ сервера который заложил Бакенд разработчик, тоо что мы должны использовать на клиенте
	// readyState - содержжит текущее состояие нашего запроса, обозначается цифрой
	// можно посомтреть в документации что означают цифры
	// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState

	// События XMLHttpRequest() тут - https://developer.mozilla.org/ru/docs/Web/Events
});