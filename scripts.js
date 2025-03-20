const startButton = document.getElementById('start-button');
const welcomeScreen = document.getElementById('welcome-screen');
const videoScreen = document.getElementById('video-screen');
const celebrationVideo = document.getElementById('celebration-video');
const nextButton = document.getElementById('next-button');
const mainContent = document.getElementById('main-content');
const feedback = document.getElementById('feedback');
const goodButton = document.getElementById('good-button');
const badButton = document.getElementById('bad-button');

let clickCount = 0;

startButton.addEventListener('click', () => {
    if (clickCount < 3) {
        startButton.style.animation = 'moveButton 0.5s';
        setTimeout(() => {
            startButton.style.animation = '';
        }, 500);
        clickCount++;
    } else {
        welcomeScreen.style.display = 'none';
        videoScreen.style.display = 'flex';
    }
});

celebrationVideo.addEventListener('ended', () => {
    nextButton.style.display = 'block';
});

nextButton.addEventListener('click', () => {
    videoScreen.style.display = 'none';
    mainContent.style.display = 'flex';
    setTimeout(() => {
        feedback.style.display = 'flex';
    }, 15000); // Mostrar el mensaje flotante después de 15 segundos
});

goodButton.addEventListener('click', () => {
    alert('¡Gracias! Me alegra que te haya gustado.');
});

badButton.addEventListener('click', () => {
    alert('Lo siento, intentaré hacerlo mejor la próxima vez.');
});