function checkAnswer() {
    const answerInput = document.getElementById('answer').value.toLowerCase();
    const resultElement = document.getElementById('result');
    const hiddenContent = document.getElementById('hidden-content');
    
    if (answerInput === 'egg') {
        resultElement.textContent = 'Correct! Click the photo to download the hidden audio.';
        hiddenContent.style.display = 'block'; // Show the hidden content
    } else {
        resultElement.textContent = 'Incorrect, try again.';
        hiddenContent.style.display = 'none'; // Hide the hidden content
    }
}
