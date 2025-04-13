// Функція для отримання даних за допомогою fetch
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

// Функція для отримання даних за допомогою XMLHttpRequest
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

// Функція для завантаження сторінки "Users"
function loadUsers() {
// Очищення контейнера
var contentDiv = document.getElementById('content');
contentDiv.innerHTML = '<h2>Users</h2>';

// Отримання даних за допомогою fetch
fetchData('https://jsonplaceholder.typicode.com/users', function(err, data) {
    if (err) {
    contentDiv.innerHTML += '<p>Помилка при завантаженні користувачів (fetch): ' + err.message + '</p>';
    } else {
    var html = '<h3>Користувачі (fetch):</h3><ul>';
    data.forEach(function(user) {
        html += '<li>' + user.name + ' (' + user.email + ')</li>';
    });
    html += '</ul>';
    contentDiv.innerHTML += html;
    }
});

// Отримання даних за допомогою XMLHttpRequest
xhrData('https://jsonplaceholder.typicode.com/users', function(err, data) {
    if (err) {
    contentDiv.innerHTML += '<p>Помилка при завантаженні користувачів (XHR): ' + err.message + '</p>';
    } else {
    var html = '<h3>Користувачі (XHR):</h3><ul>';
    data.forEach(function(user) {
        html += '<li>' + user.name + ' (' + user.email + ')</li>';
    });
    html += '</ul>';
    contentDiv.innerHTML += html;
    }
});
}

// Функція для завантаження сторінки "Posts"
function loadPosts() {
var contentDiv = document.getElementById('content');
contentDiv.innerHTML = '<h2>Posts</h2>';

// Отримання даних за допомогою fetch
fetchData('https://jsonplaceholder.typicode.com/posts', function(err, data) {
    if (err) {
    contentDiv.innerHTML += '<p>Помилка при завантаженні постів (fetch): ' + err.message + '</p>';
    } else {
    var html = '<h3>Пости (fetch):</h3><ul>';
    data.forEach(function(post) {
        html += '<li><strong>' + post.title + '</strong><br>' + post.body + '</li>';
    });
    html += '</ul>';
    contentDiv.innerHTML += html;
    }
});

// Отримання даних за допомогою XMLHttpRequest
xhrData('https://jsonplaceholder.typicode.com/posts', function(err, data) {
    if (err) {
    contentDiv.innerHTML += '<p>Помилка при завантаженні постів (XHR): ' + err.message + '</p>';
    } else {
    var html = '<h3>Пости (XHR):</h3><ul>';
    data.forEach(function(post) {
        html += '<li><strong>' + post.title + '</strong><br>' + post.body + '</li>';
    });
    html += '</ul>';
    contentDiv.innerHTML += html;
    }
});
}

// Функція для завантаження сторінки "Comments"
function loadComments() {
var contentDiv = document.getElementById('content');
contentDiv.innerHTML = '<h2>Comments</h2>';

// Отримання даних за допомогою fetch
fetchData('https://jsonplaceholder.typicode.com/comments', function(err, data) {
    if (err) {
    contentDiv.innerHTML += '<p>Помилка при завантаженні коментарів (fetch): ' + err.message + '</p>';
    } else {
    var html = '<h3>Коментарі (fetch):</h3><ul>';
    data.forEach(function(comment) {
        html += '<li><strong>' + comment.name + '</strong> (' + comment.email + ')<br>' + comment.body + '</li>';
    });
    html += '</ul>';
    contentDiv.innerHTML += html;
    }
});

// Отримання даних за допомогою XMLHttpRequest
xhrData('https://jsonplaceholder.typicode.com/comments', function(err, data) {
    if (err) {
    contentDiv.innerHTML += '<p>Помилка при завантаженні коментарів (XHR): ' + err.message + '</p>';
    } else {
    var html = '<h3>Коментарі (XHR):</h3><ul>';
    data.forEach(function(comment) {
        html += '<li><strong>' + comment.name + '</strong> (' + comment.email + ')<br>' + comment.body + '</li>';
    });
    html += '</ul>';
    contentDiv.innerHTML += html;
    }
});
}

// Функція для завантаження потрібної сторінки на основі хешу в URL
function loadPage() {
var hash = window.location.hash;
if (hash === '#users') {
    loadUsers();
} else if (hash === '#posts') {
    loadPosts();
} else if (hash === '#comments') {
    loadComments();
} else {
    // Якщо хеш не заданий, показуємо базове повідомлення
    document.getElementById('content').innerHTML = '<p>Виберіть сторінку для перегляду даних.</p>';
}
}

// Демонстрація використання методів call, apply та bind

// Функція, яка використовує контекст (this) для привітання
function greet(greeting, punctuation) {
return greeting + ', ' + this.name + punctuation;
}

// Об'єкт, який буде використовуватись як контекст
var user = { name: 'Олександр' };

// Функція для демонстрації роботи call, apply, bind
function demoCallApplyBind() {
var resultDiv = document.getElementById('demo-call-apply-bind');

// Використання call: передаємо аргументи окремо
var greetCall = greet.call(user, 'Привіт', '!');

// Використання apply: передаємо аргументи як масив
var greetApply = greet.apply(user, ['Вітаю', '!']);

// Використання bind: створюємо нову функцію з прив'язаним контекстом та аргументами
var greetBind = greet.bind(user, 'Салют', '!')();

var html = '<h2>Демонстрація call, apply, bind</h2>';
html += '<p><strong>Call:</strong> ' + greetCall + '</p>';
html += '<p><strong>Apply:</strong> ' + greetApply + '</p>';
html += '<p><strong>Bind:</strong> ' + greetBind + '</p>';
resultDiv.innerHTML = html;
}

// Додаємо слухача подій для зміни хешу в URL
window.addEventListener('hashchange', loadPage);

// При завантаженні документа завантажуємо потрібну сторінку та демонстрацію методів
window.addEventListener('load', function() {
loadPage();
demoCallApplyBind();
});