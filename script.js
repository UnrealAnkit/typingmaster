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
    "The sun dipped below the horizon, painting the sky in hues of orange and pink;";
"She opened the book and lost herself in a world of adventure;";
"A gentle breeze rustled the leaves, creating a soothing symphony of nature;";
"Time flies when you're having fun, or so they say;";
"The aroma of freshly brewed coffee filled the air, inviting everyone to take a sip;";
"Stars twinkled like diamonds scattered across the vast night sky;";
"The old clock ticked rhythmically, marking the passage of time;";
"Laughter echoed through the halls, a sign of joy and camaraderie;";
"Each wave crashed against the shore, a timeless dance of water and land;";
"A single rose stood out in the garden, vibrant and full of life;";
"The mountain peak loomed in the distance, a challenge waiting to be conquered;";
"She glanced at the photograph, memories flooding back like a tide;";
"The city buzzed with energy, a hive of activity and excitement;";
"Clouds drifted lazily, casting shadows on the ground below;";
"He typed furiously, ideas flowing like a river onto the page;";
"The scent of autumn leaves filled the air, a reminder of change;";
"A melody played softly, wrapping around her like a warm blanket;";
"He took a deep breath, savoring the crisp morning air;";
"The kitten chased after a ball of yarn, tumbling in pure delight;";
"Rain pattered gently against the window, a soothing backdrop to her thoughts;";
"The fireworks lit up the night, a celebration of color and sound;";
"A secret garden lay hidden behind the tall hedges, waiting to be discovered;";
"The waves whispered secrets to the shore, tales of the deep blue sea;";
"She danced like no one was watching, lost in the rhythm of the music;";
"A flickering candle cast shadows on the walls, creating an intimate atmosphere;";
"The library was a sanctuary of knowledge, where every book held a story;";
"He watched the world go by, content in his little corner of the café;";
"The first snowflakes of winter began to fall, each one unique and delicate;";
"A friendly dog wagged its tail, eager for a game of fetch;";
"She wrote a letter, pouring her heart onto the page with every stroke of the pen;";
"The streetlights flickered to life as dusk settled over the city;";
"A warm smile can change someone's day, spreading positivity like wildfire;";
"The thrill of adventure awaited just beyond the horizon;";
"He found solace in the pages of his favorite novel, escaping reality;";
"The taste of summer lingered in the sweet strawberries and cool lemonade;";
"A lone bird sang a melody, greeting the dawn with its cheerful notes;";
"The old photograph captured a moment frozen in time, a glimpse into the past;";
"A gentle reminder to appreciate the little things in life;";
"She explored the winding paths of the forest, feeling at one with nature;";
"The golden hour cast a magical glow over the landscape;";
"He closed his eyes, envisioning the possibilities of tomorrow;";
"The laughter of children playing filled the air with joy and innocence;";
"The rhythm of the rain created a soothing lullaby;";
"A journey of a thousand miles begins with a single step;";
"The old piano played a haunting tune, echoing through the empty room;";
"Friendship is a treasure, worth more than gold;";
"The first bloom of spring brought hope and renewal;";
"She twirled in her new dress, feeling like a princess for the day;";
"A whispered secret shared between friends can last a lifetime;";
"The distant mountains were cloaked in mist, a sight to behold;";
"Each star in the sky represented a dream waiting to be fulfilled;";
"The warmth of the sun on her face was a gentle reminder of summer;";
"He discovered a new passion that ignited his creativity;";
"The taste of chocolate melted on her tongue, pure bliss;";
"A walk along the beach brought a sense of peace and tranquility;";
"The autumn leaves crunched underfoot, a satisfying sound;";
"She painted her dreams on a canvas, each stroke vibrant and full of life;";
"The crackling fire warmed the room, inviting everyone to gather around;";
"A moment of silence can speak volumes;";
"The thrill of the unknown fueled their adventurous spirits;";
"She held onto hope like a lifeline in turbulent waters;";
"The gentle hum of conversation created a cozy atmosphere in the café;";
"A butterfly landed softly on her shoulder, a fleeting moment of beauty;";
"The moon cast a silvery glow over the landscape, illuminating the night;";
"Every sunset is an opportunity to reset and reflect;";
"He found joy in the simplicity of everyday moments;";
"The taste of nostalgia lingered in the air, a reminder of childhood;";
"A smile can bridge distances and bring people closer;";
"She chased her dreams with unwavering determination;";
"The sound of waves crashing was a reminder of nature's power;";
"Each chapter of life unfolds like the pages of a book;";
"The aroma of spices filled the kitchen, signaling a feast to come;";
"A gentle reminder to take a deep breath and enjoy the moment;";
"The sound of laughter echoed through the park, a symphony of joy;";
"A soft rain fell, washing away the worries of the day;";
"The world was alive with possibilities, waiting to be explored;";
"She planted seeds of hope, nurturing them with love and care;";
"The distant sound of thunder rumbled, a prelude to the storm;";
"A shared glance spoke volumes, an unspoken connection;";
"The vibrant colors of the sunset painted a masterpiece in the sky;";
"He found comfort in the familiarity of routine;";
"A treasure map led to hidden gems and forgotten stories;";
"The joy of giving brought warmth to her heart;";
"The first bite of a homemade pie was pure comfort;";
"Each day was a blank canvas, ready to be painted with new experiences;";
"The sound of chirping birds signaled the arrival of spring;";
"A warm hug can chase away the coldest of days;";
"The mysteries of the universe spark curiosity and wonder;";
"She admired the resilience of nature, thriving against all odds;";
"A gentle nudge can lead to unexpected adventures;";
"The flickering candlelight created a magical ambiance;";
"Every step taken is a step toward a new beginning;";
"The taste of fresh fruit was a burst of summer on her tongue;";
"A kind word can brighten even the darkest of days;";
"The beauty of imperfection adds character to life;";
"He closed his eyes and listened to the rhythm of the world around him;";
"A leap of faith can lead to extraordinary journeys;";
"The canvas of the sky transformed with each passing hour;";
"She found her voice and spoke her truth with confidence;";
"The dance of fireflies lit up the evening, a celebration of light;";

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
