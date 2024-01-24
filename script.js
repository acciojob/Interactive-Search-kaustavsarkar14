//your JS code here. If required.
document.querySelector('.btn').addEventListener('click', function() {
    var searchDiv = document.querySelector('.search');
    searchDiv.classList.add('active');

    // Focus on the input field after clicking the button
    searchDiv.querySelector('.input').focus();
});