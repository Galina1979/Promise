// 1)
let one = "Добрый день";
console.log(one);
let two = new Promise((resolve, reject) =>{
    setTimeout(() =>{
     resolve(one = "До свидания");    // выполняется, когда код завершился удачно
    }, 1000);
});
// обработчик промиса
two.then(()=>{
    console.log(one);
});

// ---------------------------------------------------------------
function rejectPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Промис отклонен!');
        }, 2000);
    });
}
// Использование промиса
rejectPromise()
    .catch(error => console.error(error));
// ----------------------------------------------------
// 2)
        function delayedPromise() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('Прошло 3 секунды!');
                }, 3000);
            });
        }
        // Используем функцию и обрабатываем разрешение промиса
        delayedPromise()
            .then(result => {
                console.log(result); // Выводим значение в alert
            })
            .catch(error => {
                console.error('Ошибка:', error); // Этот блок выполнится, если промис отклонится
            });
// ----------------------------------------------
            // Функция, возвращающая промис, который разрешается 
function resolvedPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Промис разрешен!');
        }, 5000);
    });
}

// Функция, возвращающая промис, который отклоняется 
function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Промис отклонен!');
        }, 10000);
    });
}

// Обрабатываем оба промиса
resolvedPromise()
    .then(result => {
        console.log('Результат разрешенного промиса:', result);
    })
    .catch(error => {
        console.error('Ошибка разрешенного промиса:', error);
    });
rejectedPromise()
    .then(result => {
        console.log('Результат отклоненного промиса:', result);
    })
    .catch(error => {
        console.error('Ошибка отклоненного промиса:', error);
    });

    // ------------------------------------------
    // 3)
    async function fetchDataWithDelay() {
        try {
            const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
    
            // Добавляем задержку в 2 секунды перед выводом результата
            setTimeout(() => {
                console.log('Результат запроса с задержкой:', data);
            }, 15000);
        } catch (error) {
            console.error('Ошибка при запросе к API:', error);
        }
    }
    
    // Вызываем функцию
    fetchDataWithDelay();

    // --------------------------------------
    fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(data => 
    document.querySelector('div').innerHTML = JSON.stringify(data)
    )
    .catch(console.error);