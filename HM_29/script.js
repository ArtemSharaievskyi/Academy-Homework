/* ===================================== */
/* Функції для отримання даних через fetch та XMLHttpRequest */
/* ===================================== */

// Функція для отримання даних через fetch
function fetchData(url, callback) {
fetch(url)
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    callback(null, data);
    })
    .catch(function(err) {
    callback(err, null);
    });
}

// Функція для отримання даних через XMLHttpRequest
function xhrData(url, callback) {
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = function() {
    if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    callback(null, data);
    } else {
    callback(new Error('Запит завершився з помилкою: ' + xhr.status), null);
    }
};
xhr.onerror = function() {
    callback(new Error('Помилка мережі'), null);
};
xhr.send();
}

/* ===================================== */
/* Завдання 1: Сторінка з переходами (users, posts, comments) */
/* ===================================== */
// Функція завантаження потрібної сторінки на основі хешу в URL
function loadPage() {
var hash = window.location.hash;
if (hash === '#users') {
    loadUsers();
} else if (hash === '#posts') {
    loadPosts();
} else if (hash === '#comments') {
    loadComments();
} else {
    document.getElementById('content').innerHTML = '<p>Виберіть сторінку для перегляду даних.</p>';
}
}

/* ===================================== */
/* Завдання 2: Сторінка "Users" – отримання користувача за ID */
/* ===================================== */
function loadUsers() {
var contentDiv = document.getElementById('content');
// Очищення контейнера та додавання заголовку і форми вводу
contentDiv.innerHTML = `
    <h2>Users</h2>
    <p>Введіть ID користувача:</p>
    <input type="number" id="userIdInput" placeholder="ID користувача">
    <button id="userSendBtn">Send</button>
    <div id="userFetchResult"></div>
    <div id="userXHRResult"></div>
`;

// Додаємо обробник події для кнопки "Send"
document.getElementById('userSendBtn').addEventListener('click', function() {
    var userId = document.getElementById('userIdInput').value;
    if (!userId) {
    alert('Будь ласка, введіть ID користувача');
    return;
    }
    var url = 'https://jsonplaceholder.typicode.com/users/' + userId;
    
    // Отримання даних через fetch
    fetchData(url, function(err, data) {
    var fetchDiv = document.getElementById('userFetchResult');
    if (err) {
        fetchDiv.innerHTML = '<p>Помилка (fetch): ' + err.message + '</p>';
    } else {
        fetchDiv.innerHTML = '<h3>Користувач (fetch):</h3>' +
        '<p><strong>' + data.name + '</strong> (' + data.email + ')</p>';
    }
    });
    
    // Отримання даних через XMLHttpRequest
    xhrData(url, function(err, data) {
    var xhrDiv = document.getElementById('userXHRResult');
    if (err) {
        xhrDiv.innerHTML = '<p>Помилка (XHR): ' + err.message + '</p>';
    } else {
        xhrDiv.innerHTML = '<h3>Користувач (XHR):</h3>' +
        '<p><strong>' + data.name + '</strong> (' + data.email + ')</p>';
    }
    });
});
}

/* ===================================== */
/* Завдання 3: Сторінка "Posts" – отримання поста за ID */
/* ===================================== */
function loadPosts() {
var contentDiv = document.getElementById('content');
// Очищення контейнера та додавання заголовку і форми вводу
contentDiv.innerHTML = `
    <h2>Posts</h2>
    <p>Введіть ID поста:</p>
    <input type="number" id="postIdInput" placeholder="ID поста">
    <button id="postSendBtn">Send</button>
    <div id="postFetchResult"></div>
    <div id="postXHRResult"></div>
`;

// Додаємо обробник події для кнопки "Send"
document.getElementById('postSendBtn').addEventListener('click', function() {
    var postId = document.getElementById('postIdInput').value;
    if (!postId) {
    alert('Будь ласка, введіть ID поста');
    return;
    }
    var url = 'https://jsonplaceholder.typicode.com/posts/' + postId;
    
    // Отримання даних через fetch
    fetchData(url, function(err, data) {
    var fetchDiv = document.getElementById('postFetchResult');
    if (err) {
        fetchDiv.innerHTML = '<p>Помилка (fetch): ' + err.message + '</p>';
    } else {
        fetchDiv.innerHTML = '<h3>Пост (fetch):</h3>' +
        '<p><strong>' + data.title + '</strong></p>' +
        '<p>' + data.body + '</p>';
    }
    });
    
    // Отримання даних через XMLHttpRequest
    xhrData(url, function(err, data) {
    var xhrDiv = document.getElementById('postXHRResult');
    if (err) {
        xhrDiv.innerHTML = '<p>Помилка (XHR): ' + err.message + '</p>';
    } else {
        xhrDiv.innerHTML = '<h3>Пост (XHR):</h3>' +
        '<p><strong>' + data.title + '</strong></p>' +
        '<p>' + data.body + '</p>';
    }
    });
});
}

/* ===================================== */
/* Завдання 4: Сторінка "Comments" – отримання коментаря за ID */
/* ===================================== */
function loadComments() {
var contentDiv = document.getElementById('content');
// Очищення контейнера та додавання заголовку і форми вводу
contentDiv.innerHTML = `
    <h2>Comments</h2>
    <p>Введіть ID коментаря:</p>
    <input type="number" id="commentIdInput" placeholder="ID коментаря">
    <button id="commentSendBtn">Send</button>
    <div id="commentFetchResult"></div>
    <div id="commentXHRResult"></div>
`;

// Додаємо обробник події для кнопки "Send"
document.getElementById('commentSendBtn').addEventListener('click', function() {
    var commentId = document.getElementById('commentIdInput').value;
    if (!commentId) {
    alert('Будь ласка, введіть ID коментаря');
    return;
    }
    var url = 'https://jsonplaceholder.typicode.com/comments/' + commentId;
    
    // Отримання даних через fetch
    fetchData(url, function(err, data) {
    var fetchDiv = document.getElementById('commentFetchResult');
    if (err) {
        fetchDiv.innerHTML = '<p>Помилка (fetch): ' + err.message + '</p>';
    } else {
        fetchDiv.innerHTML = '<h3>Коментар (fetch):</h3>' +
        '<p><strong>' + data.name + '</strong> (' + data.email + ')</p>' +
        '<p>' + data.body + '</p>';
    }
    });
    
    // Отримання даних через XMLHttpRequest
    xhrData(url, function(err, data) {
    var xhrDiv = document.getElementById('commentXHRResult');
    if (err) {
        xhrDiv.innerHTML = '<p>Помилка (XHR): ' + err.message + '</p>';
    } else {
        xhrDiv.innerHTML = '<h3>Коментар (XHR):</h3>' +
        '<p><strong>' + data.name + '</strong> (' + data.email + ')</p>' +
        '<p>' + data.body + '</p>';
    }
    });
});
}

/* ===================================== */
/* Завдання 5: Демонстрація роботи call, apply, bind (ООП) */
/* ===================================== */
// Функція, що використовує контекст (this) для формування привітання
function greet(greeting, punctuation) {
return greeting + ', ' + this.name + punctuation;
}

// Об'єкт для використання у функції greet
var demoUser = { name: 'Олександр' };

// Функція для демонстрації роботи методів call, apply та bind
function demoCallApplyBind() {
var demoDiv = document.getElementById('demo-call-apply-bind');

// Використання call: аргументи передаються окремо
var resultCall = greet.call(demoUser, 'Привіт', '!');

// Використання apply: аргументи передаються як масив
var resultApply = greet.apply(demoUser, ['Вітаю', '!']);

// Використання bind: створюємо нову функцію з прив'язаним контекстом і аргументами
var boundGreet = greet.bind(demoUser, 'Салют', '!')();

var html = '<h2>Демонстрація call, apply, bind</h2>';
html += '<p><strong>Call:</strong> ' + resultCall + '</p>';
html += '<p><strong>Apply:</strong> ' + resultApply + '</p>';
html += '<p><strong>Bind:</strong> ' + boundGreet + '</p>';

demoDiv.innerHTML = html;
}


/* Слухачі подій для завантаження сторінки */
window.addEventListener('hashchange', loadPage);

// При завантаженні сторінки запускаємо завантаження відповідної сторінки та демонстрацію call, apply, bind
window.addEventListener('load', function() {
loadPage();
demoCallApplyBind();
});
