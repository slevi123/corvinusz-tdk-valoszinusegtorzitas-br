function roll() {
    var dices = document.getElementsByClassName("kocka");
    Array.prototype.forEach.call(dices, dice => {
        var value = Math.floor(Math.random() * 6) + 1;

        Array.prototype.forEach.call(dice.children, face => {
            if (face.classList.contains("face-" + value)) {
                face.style.display = "flex";
            } else {
                face.style.display = "none";
                
            }
        });
    });
}

console.log("heo");
submit_texts = document.querySelectorAll("img.ff-submit-icon~span")
submit_texts.forEach(function (submit_text) {
    submit_text.textContent = "rész elküldése";
    console.log("vau");
});