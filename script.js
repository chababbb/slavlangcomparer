function compareResult () {
    const divElem = document.querySelector ('.result');
    const rText = document.createElement ('div');
    rText.innerHTML = 'Результаты сравнения';
    divElem.append (rText);
    document.body.appendChild (rText);
}