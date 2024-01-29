const appModule = (() => {
'use strict';

const imagesOpen = [
    "AF-OPEN-concentrece-a", "AF-OPEN-concentrece-a",
    "AF-OPEN-concentrece-b", "AF-OPEN-concentrece-b",
    "AF-OPEN-concentrece-c", "AF-OPEN-concentrece-c",
    "AF-OPEN-concentrece-d", "AF-OPEN-concentrece-d",
    "AF-OPEN-concentrece-e", "AF-OPEN-concentrece-e",
    "AF-OPEN-concentrece-f", "AF-OPEN-concentrece-f",
    "AF-OPEN-concentrece-g", "AF-OPEN-concentrece-g",
    "AF-OPEN-concentrece-h", "AF-OPEN-concentrece-h",
    "AF-OPEN-concentrece-i", "AF-OPEN-concentrece-i",
    "AF-OPEN-concentrece-j", "AF-OPEN-concentrece-j"
];

let shuffleImages = _.shuffle(imagesOpen);

//Elementos HTML
const game = document.querySelector('.game');

for (let i = 0; i < imagesOpen.length; i++) {
    let box = document.createElement("div");
    box.className = 'item';
    box.innerHTML = `<img src="assets/img/${shuffleImages[i]}.png" alt="Hola">`;
    box.onclick = () => {
        box.classList.add('boxOpen');
        gameLogic();
    };
    game.appendChild(box);
}

//Funciones

// const resetWindow = () => {
//     window.location.reload();
// };

const items = document.querySelectorAll('.item');

items.forEach((item, index) => {
    const percentage = 1 - index / (items.length - 1);
    const redIntensity = Math.round(135 - percentage * 30); // Adjust the red intensity
    const greenIntensity = Math.round(206 - percentage * 50); // Adjust the green intensity
    const blueIntensity = Math.round(500 - percentage * 30); // Adjust the blue intensity
    item.style.setProperty('--item-bg-color', `rgb(${redIntensity}, ${greenIntensity}, ${blueIntensity})`);
});


const gameLogic = () => {

    const boxOpen = document.querySelectorAll('.boxOpen');

    setTimeout(() => {
        if (boxOpen.length > 1) {
            if (boxOpen[0].innerHTML == boxOpen[1].innerHTML) {

                boxOpen[1].classList.add('boxMatch');
                boxOpen[0].classList.add('boxMatch');
                boxOpen[1].classList.remove('boxOpen');
                boxOpen[0].classList.remove('boxOpen');

                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    alert('Ganaste');
                    // setTimeout(() => {
                    //     resetWindow();
                    // }, 800);
                }
            } else {
                boxOpen[1].classList.remove('boxOpen');
                boxOpen[0].classList.remove('boxOpen');
            }
        }
    }, 500);
};

})();