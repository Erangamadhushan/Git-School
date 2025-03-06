 // Add functionality to all copy buttons
 document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the code block associated with this button
            const codeBlock = button.previousElementSibling;
            const codeText = codeBlock.textContent;
            
            // Copy to clipboard
            navigator.clipboard.writeText(codeText)
                .then(() => {
                    // Visual feedback
                    button.textContent = 'Copied!';
                    button.classList.add('copied');
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        button.textContent = 'Copy';
                        button.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    button.textContent = 'Error!';
                    
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                });
        });
    });
});