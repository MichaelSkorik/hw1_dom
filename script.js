"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const superLink = document.getElementById("super_link");
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach(link => {
    link.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardBodyLinks = document.querySelectorAll(".card-body .card-link");
console.log(cardBodyLinks);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const firstDataNumber50 = document.querySelector('[data-number="50"]');
console.log(firstDataNumber50);

// 5. Выведите содержимое тега title в консоль.
const pageTitle = document.querySelector("title");
if (pageTitle) {
    console.log(pageTitle.textContent);
} else {
    console.log("Тег <title> не найден");
}

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitle = document.querySelector(".card-title");
if (cardTitle) {
    console.log(cardTitle.parentNode);
} else {
    console.log("Элемент с классом .card-title не найден");
}

// 7. Создайте тег <p>, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const newParagraph = document.createElement("p");
newParagraph.textContent = "Привет";
const card = document.querySelector(".card");
if (card) {
    card.prepend(newParagraph);
} else {
    console.log("Элемент с классом .card не найден");
}

// 8. Удалите тег h6 на странице.
const cardSubtitle = document.querySelector("h6");
if (cardSubtitle) {
    cardSubtitle.remove();
} else {
    console.log("Тег <h6> не найден");
}