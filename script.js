// Get references to HTML elements
const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const noteList = document.getElementById('note-list');

// Add event listener to the "Add Note" button
addNoteBtn.addEventListener('click', addNote);

// Function to add a new note
function addNote() {
  // Get the note text from the input field
  const noteText = noteInput.value;

  // Create a new list item
  const listItem = document.createElement('li');

  // Create a text node with the note text and append it to the list item
  const noteTextNode = document.createTextNode(noteText);
  listItem.appendChild(noteTextNode);

  // Append the list item to the note list
  noteList.appendChild(listItem);

  // Clear the note input field
  noteInput.value = '';
}
