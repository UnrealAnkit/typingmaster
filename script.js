const sentences = [
    "The old oak tree stood tall and majestic, its branches reaching out like gnarled fingers grasping at the sky, while birds nestled in its leafy embrace, singing their melodious songs to the world below.",
    "As the sun dipped below the horizon, painting the sky in hues of orange and pink, the city came alive with twinkling lights, each one a beacon of life in the growing darkness.",
    "The ancient tome lay open on the dusty table, its yellowed pages filled with cryptic symbols and forgotten knowledge, waiting for someone to unlock its secrets and unleash its power upon the world.",
    "In the depths of the ocean, where sunlight barely penetrates, strange and wondrous creatures glide through the inky blackness, their bioluminescent bodies creating a mesmerizing light show for those lucky enough to witness it.",
    "The aroma of freshly baked bread wafted through the air, enticing passersby with its warm, comforting scent, promising a taste of home and happiness with every golden, crusty loaf.",
    "As the spacecraft hurtled through the cosmos, its crew marveled at the breathtaking view of distant galaxies and nebulae, each one a swirling masterpiece of cosmic art painted across the vast canvas of space.",
    "The old clockmaker's workshop was a cacophony of ticks and tocks, with hundreds of timepieces marking the passage of seconds, minutes, and hours in their own unique rhythms.",
    "Deep in the heart of the rainforest, a hidden waterfall cascaded down moss-covered rocks, its crystal-clear waters collecting in a serene pool below, untouched by human hands and known only to the jungle's wild inhabitants.",
    "The bustling marketplace was a riot of colors, sounds, and smells, with vendors hawking their wares and shoppers haggling over prices, creating a vibrant tapestry of human interaction and commerce.",
    "As the first snowflakes of winter began to fall, the world seemed to hold its breath, watching in wonder as the landscape was slowly transformed into a glistening white wonderland."
  


];

const timerElement = document.getElementById('timer');
const sentenceContainer = document.getElementById('sentence-container');
const inputElement = document.getElementById('input');
const startButton = document.getElementById('start-btn');
const statsElement = document.getElementById('stats');
const liveWpmElement = document.getElementById('live-wpm');
const liveAccuracyElement = document.getElementById('live-accuracy');

let currentSentence = '';
let currentWordIndex = 0;
let timeLeft = 30;
let timerInterval;
let startTime;
let isGameActive = false;
let totalTypedChars = 0;
let correctTypedChars = 0;
let totalWords = 0;
let correctWords = 0;

let wpmData = [];
let accuracyData = [];
let wpmChart, accuracyChart;

function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

function updateSentenceDisplay() {
    const words = currentSentence.split(' ');
    const displayHTML = words.map((word, index) => 
        index === currentWordIndex ? `<span id="current-word">${word}</span>` : word
    ).join(' ');
    sentenceContainer.innerHTML = displayHTML;
}

function startGame() {
    currentSentence = getRandomSentence();
    currentWordIndex = 0;
    timeLeft = 30;
    totalTypedChars = 0;
    correctTypedChars = 0;
    totalWords = 0;
    correctWords = 0;
    updateSentenceDisplay();
    inputElement.value = '';
    inputElement.disabled = false;
    inputElement.focus();
    startButton.disabled = true;
    timerInterval = setInterval(updateTimer, 1000);
    startTime = Date.now();
    isGameActive = true;
    wpmData = [];
    accuracyData = [];
    initializeCharts();
}

function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    updateLiveStats();
    if (timeLeft <= 0) {
        endGame();
    }
}

function calculateWPM() {
    const elapsedMinutes = (Date.now() - startTime) / 60000;
    return Math.round((totalWords / elapsedMinutes) || 0);
}

function calculateAccuracy() {
    return totalTypedChars > 0 ? Math.round((correctTypedChars / totalTypedChars) * 100) : 100;
}

function updateLiveStats() {
    const wpm = calculateWPM();
    const accuracy = calculateAccuracy();

    liveWpmElement.textContent = wpm;
    liveAccuracyElement.textContent = `${accuracy}%`;

    wpmData.push(wpm);
    accuracyData.push(accuracy);
    updateCharts();
}

function initializeCharts() {
    if (wpmChart) wpmChart.destroy();
    if (accuracyChart) accuracyChart.destroy();

    wpmChart = new Chart(document.getElementById('wpm-chart'), {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'WPM',
                data: [],
                borderColor: '#ff4136',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    accuracyChart = new Chart(document.getElementById('accuracy-chart'), {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Accuracy',
                data: [],
                borderColor: '#d4b483',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function updateCharts() {
    const labels = Array.from({length: wpmData.length}, (_, i) => i + 1);
    
    wpmChart.data.labels = labels;
    wpmChart.data.datasets[0].data = wpmData;
    wpmChart.update();

    accuracyChart.data.labels = labels;
    accuracyChart.data.datasets[0].data = accuracyData;
    accuracyChart.update();
}

function endGame() {
    clearInterval(timerInterval);
    inputElement.disabled = true;
    startButton.disabled = false;
    isGameActive = false;
    const wpm = calculateWPM();
    const accuracy = calculateAccuracy();
    statsElement.innerHTML = `Words typed: ${totalWords}<br>Correct words: ${correctWords}<br>WPM: ${wpm}<br>Accuracy: ${accuracy}%`;
}

inputElement.addEventListener('input', (e) => {
    if (!isGameActive) return;

    const currentWord = currentSentence.split(' ')[currentWordIndex];
    const typedWord = e.target.value;

    // Count characters
    totalTypedChars++;
    if (typedWord[typedWord.length - 1] === currentWord[typedWord.length - 1]) {
        correctTypedChars++;
    }

    if (typedWord.endsWith(' ') || typedWord === currentWord) {
        totalWords++;
        if (typedWord.trim() === currentWord) {
            correctWords++;
        }

        currentWordIndex++;
        if (currentWordIndex >= currentSentence.split(' ').length) {
            currentSentence = getRandomSentence();
            currentWordIndex = 0;
        }
        updateSentenceDisplay();
        e.target.value = '';
    }

    updateLiveStats();
});

startButton.addEventListener('click', startGame);

// Initialize charts on page load
initializeCharts();
