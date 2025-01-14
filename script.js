// Додавання фото
function addPhoto() {
    let photoContainer = document.getElementById('photo-container');
    let newImage = document.createElement('img');
    // Тут можна реалізувати завантаження фото з комп'ютера або з URL
    newImage.src = 'path/to/your/image.jpg';
    photoContainer.appendChild(newImage);
}

// Редагування інформації
function editInfo() {
    let infoText = document.getElementById('info-text');
    let newText = prompt('Введіть новий текст');
    infoText.textContent = newText;
}
