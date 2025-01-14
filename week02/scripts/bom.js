// Step 1: Declare variables to reference the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Step 2: Add a click event listener to the Add Chapter button
button.addEventListener('click', function () {
    // Step 3: Check if the input is not blank
    if (input.value.trim() !== '') {
        // Step 4: Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = input.value.trim();

        // Step 5: Create a delete button for the list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Step 6: Append the delete button to the list item
        li.append(deleteButton);

        // Step 7: Append the list item to the unordered list
        list.append(li);

        // Step 8: Add an event listener to the delete button to remove the list item
        deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        });

        // Step 9: Clear the input field and return focus to it
        input.value = '';
        input.focus();
    } else {
        // If the input is blank, return focus to the input field
        input.focus();
    }
});