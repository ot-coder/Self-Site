// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get all the list items under the "Projects" section
    var projectListItems = document.querySelectorAll('ol li');

    // Add a click event listener to each list item
    projectListItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Display an alert with the selected project's name
            alert('Selected Project: ' + item.textContent);
        });
    });
});
