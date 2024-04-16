// script.js

document.getElementById('calculateBtn').addEventListener('click', function() {
    var yourName = document.getElementById('yourName').value.trim();
    var crushName = document.getElementById('crushName').value.trim();

    if (yourName === '' || crushName === '') {
        document.getElementById('result').innerHTML = 'Please enter both names!';
    } else {
        var compatibilityScore = calculateCompatibility(yourName, crushName);
        displayResult(compatibilityScore);
        displayEmoji(compatibilityScore);
    }
});

function calculateCompatibility(yourName, crushName) {
    
    return Math.floor(Math.random() * 101); // Random score between 0 and 100
}

function displayResult(compatibilityScore) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p class="text-2xl font-semibold">Compatibility Score: ${compatibilityScore}%</p>`;
    resultElement.innerHTML += '<p class="mt-2">' + getMessage(compatibilityScore) + '</p>';
}

function getMessage(score) {
    if (score >= 80) {
        return "You're a perfect match! Go for it!";
    } else if (score >= 60) {
        return "Looking good! There's potential!";
    } else if (score >= 40) {
        return "Hmm... There might be some sparks!";
    } else if (score >= 20) {
        return "Hmm... Maybe it's not meant to be.";
    } else {
        return "Sorry... It doesn't look good.";
    }
}

function displayEmoji(score) {
    var emojiContainer = document.getElementById('emojiContainer');
    emojiContainer.innerHTML = '';

    if (score >= 80) {
        emojiContainer.innerHTML = '<span class="emoji text-4xl">&#128525;</span>'; // Smiling Face with Smiling Eyes
    } else if (score >= 40) {
        emojiContainer.innerHTML = '<span class="emoji text-4xl">&#128542;</span>'; // Crying Face
    } else {
        emojiContainer.innerHTML = '<span class="emoji text-4xl">&#128577;</span>'; // Confounded Face
    }

    var emoji = emojiContainer.querySelector('.emoji');
    emoji.classList.add(score >= 40 ? 'sad' : 'heart');
}
