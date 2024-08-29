function increaseFontSize() {
    const elements = document.querySelectorAll('.welcome');
    elements.forEach((element, index) => {
        element.style.fontSize = `${20 + (index * 15)}px`;
    });
}





