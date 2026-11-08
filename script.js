
let heads = 0;
let tails = 0;

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

// JOGAR MOEDA

flipBtn.addEventListener("click", () => {

    let i = Math.floor(Math.random() * 2);

    coin.style.animation = "none";

    if (i) {

        setTimeout(function() {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);

        heads++;

    } else {

        setTimeout(function() {
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);

        tails++;
    }

    disableButton();

    setTimeout(updateStats, 3000);
});

// ATUALIZAR PLACAR

function updateStats() {

    document.querySelector("#heads-count").textContent =
        `🪙 Cara: ${heads}`;

    document.querySelector("#tails-count").textContent =
        `👑 Coroa: ${tails}`;
}

// DESABILITAR BOTÃO DURANTE A ANIMAÇÃO

function disableButton() {

    flipBtn.disabled = true;

    setTimeout(function() {
        flipBtn.disabled = false;
    }, 3000);
}

// RESETAR JOGO

resetBtn.addEventListener("click", () => {

    heads = 0;
    tails = 0;

    coin.style.animation = "none";

    updateStats();

    flipBtn.disabled = false;
});
