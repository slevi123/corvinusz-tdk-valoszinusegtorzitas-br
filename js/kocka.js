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