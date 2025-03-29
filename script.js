// Get references to the textarea and the output elements
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');

// Add an event listener to the textarea to update counts on input
textInput.addEventListener('input', function() {
    // Get the current value of the textarea
    const text = textInput.value;

    // Update the character count
    charCount.textContent = text.length;

    // Update the word count
    const words = text.split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;
});