// konstansok
const DICE_PROBABS = {
    "31": 5,
    "32": 11,
    "41": 16,
    "42": 22,
    "43": 27,
    "51": 33,
    "52": 38,
    "53": 44,
    "54": 50,
    "61": 55,
    "62": 61,
    "63": 66,
    "64": 72,
    "65": 77,
    "11": 80,
    "22": 83,
    "33": 86,
    "44": 88,
    "55": 91,
    "66": 94,
    "21": 1,
};

const DICE_WIN_RATIO = 50;
const DICE_SITUATIONS = [
    {0: 1, 1: 1},
];
const DICE_REPORT_SITUATIONS = [
    56
];
const FREE_DICE_ROUNDS = 3;

DOM_ELEMENTS = {};
start_dice_positions = [];
dice_game_count = 0;


// ----------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DOM_ELEMENTS["DICES"] = document.getElementsByClassName("kocka");
    DOM_ELEMENTS["ANSWER"] = document.getElementById("dice-answer");
    setup_dices();
}, false);

// kocka

function set_faces(dice_states) {
    console.log(dice_states);
    for (var i = 0; i < 2; i++) {
        const dice_state = dice_states[i];
        const dom_dice = DOM_ELEMENTS["DICES"][i];

        Array.prototype.forEach.call(dom_dice.children, face => {
            if (face.classList.contains(`face-${dice_state}`)) {
                face.style.visibility = "unset";
                face.style.opacity = 1;
            } else {
                face.style.opacity = 0;
                face.style.visiblity = "hidden";
            }
        });
    }
}

function random_dice_values() {
    random_state = {}
    for (var i = 0; i < 2; i++) {
        random_state[i] = Math.floor(Math.random() * 6) + 1;
    }

    if (random_state[0] < random_state[1]) {
        const temp = random_state[0];
        random_state[0] = random_state[1];
        random_state[1] = temp;
    }

    return random_state;
}

function roll_dices() {
    set_faces(random_dice_values());
}

function setup_dices() {
    const max_rounds = FREE_DICE_ROUNDS + DICE_SITUATIONS.length;
    round_count = 0;
    
    for (var i = 0; i < max_rounds; i++) {
        let start_faces = random_dice_values();
        if (i < DICE_SITUATIONS.length) {
            start_faces = DICE_SITUATIONS[i];
        }

        start_dice_positions.push(start_faces);
    }
    // console.log(start_dice_positions);
}

function start_dices () {
    dice_game_count++;
    round_count = 0;
    set_faces(start_dice_positions[round_count]);

    game_buttons = document.getElementById("dice-buttons").children;
    game_buttons[0].setAttribute("hidden", "hidden");
    game_buttons[1].removeAttribute("hidden");
    game_buttons[2].removeAttribute("hidden");

    // DOM_ELEMENTS["ANSWER"].style.display = "unset";
}

next_dice_round = function() {
    round_count++;
    set_faces(start_dice_positions[round_count]);
}

function next_dice() {
    correct_answer = (Math.floor(Math.random() * 100) + 1) < DICE_WIN_RATIO;
    if (correct_answer) {
        
    }
}