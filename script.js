// Variables globales
let currentScene = 1; // Control de la escena actual
let playerTurn = 1; // Control del turno (1 o 2)
let scores = { 1: 0, 2: 0 }; // Puntos de los jugadores

// Elementos de la interfaz
const sceneText = document.getElementById("scene-text");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const startButton = document.getElementById("start-button");
const questionCard = document.getElementById("question-card");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const scoreButtons = document.querySelectorAll(".score-button");

// Reglas del juego
const gameRules = [
    "Regla 1: Cada jugador tomará turnos para responder preguntas.",
    "Regla 2: El otro jugador calificará la respuesta con un puntaje.",
    "Regla 3: Los puntos se sumarán automáticamente.",
    "Regla 4: El juego termina cuando se acaban las preguntas."
];

// Función para actualizar la escena
function updateScene() {
    if (currentScene <= 3) {
        sceneText.textContent = gameRules[currentScene - 1]; // Muestra la regla actual
    } else if (currentScene === 4) {
        sceneText.textContent = "¡Listo! Pulsa START para comenzar el juego.";
        startButton.style.display = "block"; // Muestra el botón de inicio
    } else {
        sceneText.style.display = "none";
        startButton.style.display = "none";
        questionCard.style.display = "block"; // Muestra la tarjeta de pregunta
    }
}

// Navegación entre escenas
rightArrow.addEventListener("click", () => {
    if (currentScene < 5) {
        currentScene++;
        updateScene();
    }
});

leftArrow.addEventListener("click", () => {
    if (currentScene > 1) {
        currentScene--;
        updateScene();
    }
});

// Iniciar el juego
startButton.addEventListener("click", () => {
    currentScene = 5;
    updateScene();
});

// Asignar puntos al jugador contrario
scoreButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (playerTurn === 1) {
            scores[2] += parseInt(event.target.textContent); // Jugador 1 califica a Jugador 2
            updateScoreboard();
            playerTurn = 2; // Cambia el turno
        } else {
            scores[1] += parseInt(event.target.textContent); 
